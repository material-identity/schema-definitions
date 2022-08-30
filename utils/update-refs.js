const { readFileSync, writeFileSync } = require('fs');
const { resolve, join, parse } = require('path');
const { refMap } = require('./constants');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { version: pkgVersion } = require(resolve(__dirname, '../package.json'));

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
      const currentPath = currentRef.split('#/')[0];
      const fileName = parse(currentPath).base;
      const folderName = parse(currentPath).name;
      const pathToReplace = currentRef.split(fileName)[0];
      const replacementPath = environment === 'local' ? join(newPath, '/') : join(newPath, folderName, '/');

      referenceObj['$ref'] = currentRef.replace(pathToReplace, replacementPath);
    });

    updatedSchemaMap[pathToSchema] = schemaObject;
  });

  return updatedSchemaMap;
}

(async function () {
  const argv = yargs(hideBin(process.argv))
    .usage('Usage: $0 -e [environment] -h https://schemas.s1seven.com -f shared -v 0.0.1')
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
        description: 'If setting a remote path, you can override the folder here. Default is "shared"',
        demandOption: false,
        example: 'shared',
        default: 'shared',
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
    }).argv;

  const versionNumber = argv.versionNumber.startsWith('v') ? argv.versionNumber : `v${argv.versionNumber}`;
  const remotePath = join(argv.host, argv.folder, versionNumber, '/');
  const newPath = argv.environment === 'local' ? argv.localPath : remotePath;

  try {
    const schemaMap = generateUpdatedSchemaObjects(newPath, argv.environment);
    Object.keys(schemaMap).forEach((path) => {
      writeFileSync(path, JSON.stringify(schemaMap[path], null, 2));
    });
    console.log(`$refs have been updated, new path is "${newPath}"`);
  } catch (error) {
    console.error(error);
  }
})();
