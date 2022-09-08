const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const prettier = require('prettier');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { folders } = require('./constants');
const { generateUpdatedSchemaObjects } = require('./helpers');

function setLocalIds(schemaMap) {
  const updatedSchemaMap = {};

  folders.forEach((directory) => {
    const fileName = `${directory}.json`;
    const filePath = `${directory}/${fileName}`;
    let schemaObject;

    if (!schemaMap[filePath]) {
      const pathToSchema = resolve(__dirname, '../', filePath);
      const jsonSchema = readFileSync(pathToSchema);
      schemaObject = JSON.parse(jsonSchema);
    } else {
      schemaObject = schemaMap[filePath];
    }

    schemaObject['$id'] = fileName;
    updatedSchemaMap[filePath] = schemaObject;
  });

  return updatedSchemaMap;
}

function stageChanges(schemaMap) {
  const schemasPaths = Object.keys(schemaMap).join(' ');
  execSync(`git add ${schemasPaths}`);
  console.log('The updated definitions have been staged');
}

function commitChanges() {
  try {
    execSync(
      `git commit -m 'chore: update $refs to use local paths [skip ci]' --no-verify`,
    );
    console.log('Staged files have been commited.');
  } catch (error) {
    if (
      error.stdout &&
      Buffer.isBuffer(error.stdout) &&
      /no changes added to commit/.test(error.stdout.toString())
    ) {
      console.error(error.stdout.toString());
    } else {
      throw error;
    }
  }
}

(async function () {
  const argv = yargs(hideBin(process.argv))
    .usage('Usage: $0 --newPath ../ --stage [boolean] --commit [boolean]')
    .options({
      newPath: {
        description: 'Override the default path. Default is "../"',
        demandOption: false,
        example: '../',
        default: '../',
        alias: 'l',
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

  const { newPath, stage, commit } = argv;
  const prettierConfig = await prettier.resolveConfig(process.cwd());

  try {
    let schemaMap = generateUpdatedSchemaObjects(newPath, 'local');
    schemaMap = setLocalIds(schemaMap); // TODO: can this be improved?

    Object.keys(schemaMap).forEach((path) => {
      const pathToSchema = resolve(__dirname, '../', path);

      const schema = prettier.format(JSON.stringify(schemaMap[path], null, 2), {
        parser: 'json',
        ...(prettierConfig || {}),
      });

      writeFileSync(pathToSchema, schema);
    });
    console.log(`$refs have been updated, new path is "${newPath}"`);

    if (stage) stageChanges(schemaMap);
    if (commit) commitChanges();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
