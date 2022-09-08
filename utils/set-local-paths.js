const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const { resolve } = require('path');
const prettier = require('prettier');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const {
  commitChanges,
  generateUpdatedSchemaObjects,
  setLocalIds,
} = require('./helpers');

function stageChanges(schemaMap) {
  const schemasPaths = Object.keys(schemaMap).join(' ');
  execSync(`git add ${schemasPaths}`);
  console.log('The updated definitions have been staged');
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
    schemaMap = setLocalIds(schemaMap);

    // takes schemaMap object, iterates over keys, writes values
    Object.keys(schemaMap).forEach((path) => {
      const pathToSchema = resolve(__dirname, '../', path);

      const schema = prettier.format(JSON.stringify(schemaMap[path], null, 2), {
        parser: 'json',
        ...(prettierConfig || {}),
      });

      writeFileSync(pathToSchema, schema);
    });
    console.log(`$refs and $ids have been updated, new path is "${newPath}"`);

    if (stage) stageChanges(schemaMap);
    if (commit)
      commitChanges(
        'chore: update $refs and $ids to use local paths [skip ci]',
      );
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
