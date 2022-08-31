const { SchemaRepositoryVersion } = require('@s1seven/schema-tools-versioning');
const { execSync } = require('child_process');

const { version: pkgVersion } = require('../package.json');
const { defaultServerUrl } = require('./constants');

const schemaFilePaths = [
  { filePath: 'attachment/attachment.json', properties: [{ path: '$id', value: 'attachement/attachement.json' }] },
  { filePath: 'chemical-element/chemical-element.json', properties: [{ path: '$id', value: 'chemical-element.json' }] },
  {
    filePath: 'commercial-transaction/commercial-transaction.json',
    properties: [{ path: '$id', value: 'commercial-transaction/commercial-transaction.json' }],
  },
  { filePath: 'company/company.json', properties: [{ path: '$id', value: 'company/company.json' }] },
  { filePath: 'languages/languages.json', properties: [{ path: '$id', value: 'languages/languages.json' }] },
  { filePath: 'measurement/measurement.json', properties: [{ path: '$id', value: 'measurement/measurement.json' }] },
  {
    filePath: 'commercial-transaction/commercial-transaction.json',
    properties: [{ path: '$id', value: 'commercial-transaction/commercial-transaction.json' }],
  },
  { filePath: 'validation/validation.json', properties: [{ path: '$id', value: 'validation/validation.json' }] },
];

function stageAndCommitChanges(version) {
  const schemasPaths = schemaFilePaths.map(({ filePath }) => filePath).join(' ');
  execSync(`git add ${schemasPaths}`);
  execSync(`git commit -m 'chore: sync versions to ${version}'`);
}

(async function (argv) {
  const version = argv[2] || `v${pkgVersion}`;
  const updater = new SchemaRepositoryVersion(defaultServerUrl, schemaFilePaths, version);
  await updater.updateSchemasVersion();

  stageAndCommitChanges(version);
})(process.argv);
