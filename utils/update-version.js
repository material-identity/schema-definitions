const { SchemaRepositoryVersion } = require('@s1seven/schema-tools-versioning');
const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const prettier = require('prettier');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const { version: pkgVersion } = require('../package.json');
const { addVToVersionNumber, defaultServerUrl } = require('./constants');
const { commitChanges, getSchemaObjsWithUpdatedRefs } = require('./helpers');

const schemaFilePaths = [
  {
    filePath: 'attachment/attachment.json',
    properties: [{ path: '$id', value: 'attachment/attachment.json' }],
  },
  {
    filePath: 'chemical-element/chemical-element.json',
    properties: [
      { path: '$id', value: 'chemical-element/chemical-element.json' },
    ],
  },
  {
    filePath: 'commercial-transaction/commercial-transaction.json',
    properties: [
      {
        path: '$id',
        value: 'commercial-transaction/commercial-transaction.json',
      },
    ],
  },
  {
    filePath: 'company/company.json',
    properties: [{ path: '$id', value: 'company/company.json' }],
  },
  {
    filePath: 'key-value-object/key-value-object.json',
    properties: [
      {
        path: '$id',
        value: 'key-value-object/key-value-object.json',
      },
    ],
  },
  {
    filePath: 'languages/languages.json',
    properties: [{ path: '$id', value: 'languages/languages.json' }],
  },
  {
    filePath: 'measurement/measurement.json',
    properties: [{ path: '$id', value: 'measurement/measurement.json' }],
  },
  {
    filePath: 'product-description/product-description.json',
    properties: [
      { path: '$id', value: 'product-description/product-description.json' },
    ],
  },
  {
    filePath: 'validation/validation.json',
    properties: [{ path: '$id', value: 'validation/validation.json' }],
  },
];

function stageChanges() {
  const schemasPaths = schemaFilePaths
    .map(({ filePath }) => filePath)
    .join(' ');
  execSync(`git add ${schemasPaths}`);
}

(async function () {
  const argv = yargs(hideBin(process.argv))
    .usage(
      'Usage: $0 --host https://schemas.s1seven.com --folder schema-definitions --version 0.0.1 --stage [boolean] --commit [boolean]',
    )
    .options({
      versionNumber: {
        description:
          'If setting a remote path, you can override the version number here. Default is taken from package.json',
        demandOption: false,
        example: '0.0.1',
        default: pkgVersion,
        alias: 'v',
      },
      host: {
        description:
          'If setting a remote path, you can override the host here. Default is "https://schemas.s1seven.com/"',
        demandOption: false,
        example: 'https://schemas.s1seven.com/',
        alias: 'h',
      },
      folder: {
        description:
          'If setting a remote path, you can override the folder here. Default is "schema-definitions"',
        demandOption: false,
        example: 'schema-definitions',
        alias: 'f',
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

  const { versionNumber, host, folder, stage, commit } = argv;
  const newVersionNumber = addVToVersionNumber(versionNumber);
  const prettierConfig = await prettier.resolveConfig(process.cwd());
  const serverUrl =
    host && folder ? new URL(folder, host).href : defaultServerUrl;

  try {
    const updater = new SchemaRepositoryVersion(
      serverUrl,
      schemaFilePaths,
      newVersionNumber,
    );
    await updater.updateSchemasVersion();

    const schemaMap = getSchemaObjsWithUpdatedRefs(
      serverUrl,
      'remote',
      newVersionNumber,
    );

    Object.keys(schemaMap).forEach((filePath) => {
      const input = JSON.stringify(schemaMap[filePath], null, 2);
      const output = prettier.format(input, {
        parser: 'json',
        ...(prettierConfig || {}),
      });
      writeFileSync(filePath, output);
    });

    if (stage) stageChanges();
    if (commit)
      commitChanges(`chore: update version to ${newVersionNumber} [skip ci]`);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
