const { readFileSync, writeFileSync } = require('fs');
const { resolve, join, parse } = require('path');
const { refMap } = require('./constants');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { version: pkgVersion } = require(resolve(__dirname, '../package.json'));
const { execSync } = require('child_process');
const { get } = require('lodash');

function generateUpdatedSchemaObjects(newPath, environment) {
  // creates an object map with the path to the schema as the key and the updated schema object as the value
  const updatedSchemaMap = {};

  Object.keys(refMap).forEach((directory) => {
    const pathToSchema = resolve(__dirname, `../${directory}/${directory}.json`);
    const jsonSchema = readFileSync(pathToSchema);
    const schemaObject = JSON.parse(jsonSchema);

    refMap[directory].forEach((property) => {
      const propertyLookupPath = `['definitions'][${property}]['allOf'][0]`;
      const referenceObj = get(schemaObject, propertyLookupPath);
      const currentRef = referenceObj['$ref'];
      const currentPath = currentRef.split('#/')[0]; // e.g. ../key-value-object.json
      const { base: fileName, name: folderName } = parse(currentPath);
      const pathToReplace = currentRef.split(fileName)[0]; // e.g. ../
      const replacementPath = environment === 'local' ? join(newPath, '/') : join(newPath, folderName, '/');

      referenceObj['$ref'] = currentRef.replace(pathToReplace, replacementPath);
    });

    updatedSchemaMap[pathToSchema] = schemaObject;
  });

  return updatedSchemaMap;
}

function stageChanges() {
  const schemasPaths = Object.keys(refMap)
    .map((directory) => `${directory}/${directory}.json`)
    .join(' ');

  execSync(`git add ${schemasPaths}`);
  console.log('The updated definitions have been stashed');
}

function commitChanges(environment, version) {
  execSync(`git commit -m 'chore: update ${environment} $refs to ${version}'`);
  console.log('Stashed files have been commited.');
}

(async function () {
  const argv = yargs(hideBin(process.argv))
    .usage('Usage: $0 -e [environment] -h https://schemas.s1seven.com -f schema-definitions -v 0.0.1')
    .options({
      environment: {
        description: 'Set refs to remote or local paths, default values can be overridden',
        demandOption: true,
        example: 'remote',
        alias: 'e',
        coerce: (value) => {
          const allowedEnvs = ['remote', 'local'];
          if (allowedEnvs.includes(value)) {
            return value;
          }
          throw new TypeError(`Environment should be one of ${allowedEnvs}`);
        },
      },
      localPath: {
        description: 'If using a local environment, set the path here. Default is "../"',
        demandOption: false,
        example: '../',
        default: '../',
        alias: 'l',
      },
      host: {
        description:
          'If setting a remote path, you can override the host here. Default is "https://schemas.s1seven.com/"',
        demandOption: false,
        example: 'https://schemas.s1seven.com/',
        default: 'https://schemas.s1seven.com/',
        alias: 'h',
      },
      folder: {
        description: 'If setting a remote path, you can override the folder here. Default is "schema-definitions"',
        demandOption: false,
        example: 'schema-definitions',
        default: 'schema-definitions',
        alias: 'f',
      },
      versionNumber: {
        description:
          'If setting a remote path, you can override the version number here. Default is taken from package.json',
        demandOption: false,
        example: '0.0.1',
        default: pkgVersion,
        alias: 'v',
      },
      stage: {
        description: 'If true, it will add the affected files to staging.',
        demandOption: false,
        default: false,
        alias: 's',
      },
      commit: {
        description: 'If true, it will commit staged files.',
        demandOption: false,
        default: false,
        alias: 'c',
      },
    }).argv;

  const { versionNumber, host, folder, environment, localPath, stage, commit } = argv;
  const newVersionNumber = versionNumber.startsWith('v') ? versionNumber : `v${versionNumber}`;
  const remotePath = join(host, folder, newVersionNumber, '/');
  const newPath = environment === 'local' ? localPath : remotePath;

  try {
    const schemaMap = generateUpdatedSchemaObjects(newPath, argv.environment);
    Object.keys(schemaMap).forEach((path) => {
      writeFileSync(path, JSON.stringify(schemaMap[path], null, 2));
    });
    console.log(`$refs have been updated, new path is "${newPath}"`);

    if (stage) stageChanges();
    if (commit) commitChanges(environment, newVersionNumber);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
