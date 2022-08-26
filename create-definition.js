const fs = require('fs');
const yargs = require('yargs');
const { resolve } = require('path');

const writeFile = function (key, value) {
  fs.writeFileSync(resolve(key), value);
};

const writeSchemaDirAndFiles = function (schemaName, createHbs) {
  if (!schemaName) throw new Error('You must input a schema definition name');
  if (fs.existsSync(schemaName)) throw new Error(`Directory ${schemaName} already exists`);

  const jsonSchemaStarter = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: `${schemaName}.json`,
    definitions: {},
  };
  const testSchemaStarter = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'test-schema.json',
    type: 'object',
    properties: {
      Certificate: {
        type: 'object',
        properties: {},
        required: [],
      },
    },
    required: ['Certificate'],
  };
  const testSuiteMap = `const validCertTestSuitesMap = [
    // { certificateName: 'valid-certificate-1' },
    // { certificateName: 'valid-certificate-2' },
    // { certificateName: 'valid-certificate-3' },
  ];
  
  const invalidCertTestSuitesMap = [
    // {
    //   certificateName: 'invalid-certificate-1',
    //   expectedErrors: [],
    // },
    // {
    //   certificateName: 'invalid-certificate-2',
    //   expectedErrors: [],
    // },
    // {
    //   certificateName: 'invalid-certificate-3',
    //   expectedErrors: [],
    // },
  ];
  
  module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
  \n`;
  const certificateFixtureBase = {
    Certificate: {},
  };

  const fileNameMap = {
    [`${schemaName}/${schemaName}.json`]: JSON.stringify(jsonSchemaStarter, null, 2),
    [`${schemaName}/test-schema.json`]: JSON.stringify(testSchemaStarter, null, 2),
    [`${schemaName}/test/test-suites-map.js`]: testSuiteMap,
    [`${schemaName}/test/fixtures/valid-certificate-1.json`]: JSON.stringify(certificateFixtureBase, null, 2),
    [`${schemaName}/test/fixtures/invalid-certificate-1.json`]: JSON.stringify(certificateFixtureBase, null, 2),
  };
  if (createHbs) fileNameMap[`${schemaName}/${schemaName}.hbs`] = '';

  fs.mkdirSync(resolve(`${schemaName}/test/fixtures`), { recursive: true });
  Object.keys(fileNameMap).forEach((key) => writeFile(key, fileNameMap[key]));
  console.log(`Directory ${schemaName} and starter files created`);
};

(async function () {
  const argv = yargs.usage('Usage: $0 --name [schema name] --hbs [boolean]').options({
    name: {
      alias: 'n',
      demandOption: true,
      describe: 'The name for your schema definition',
      type: 'string',
    },
    hbs: {
      alias: 'h',
      demandOption: false,
      default: true,
      describe: 'Whether or not to create a <name>.hbs file',
      type: 'boolean',
    },
  }).argv;

  try {
    writeSchemaDirAndFiles(argv.name, argv.hbs);
    process.exit(0);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();
