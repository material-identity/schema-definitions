const fs = require('fs');
const yargs = require('yargs');
const { resolve } = require('path');

const writeFile = function (key, value) {
  fs.writeFileSync(resolve(key), value);
};

const writeSchemaDirAndFiles = function (schemaName, createHbs) {
  if (!schemaName) throw new Error('You must input a schema definition name');

  const jsonSchemaStarter = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: `${schemaName}.json`,
    definitions: {},
  };
  const testSchemaStarter = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'test-schema.json',
    type: 'object',
    properties: {},
    required: [],
  };
  const testSuiteMap = `const validCertTestSuitesMap = [
    // { certificateName: 'valid-certificate-1' }
  ];
  
  const invalidCertTestSuitesMap = [
    // {
    //   certificateName: 'invalid-certificate-1',
    //   expectedErrors: [],
    // },
  ];
  
  module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
  \n`;

  const fileNameMap = {
    [`${schemaName}/${schemaName}.json`]: JSON.stringify(jsonSchemaStarter),
    [`${schemaName}/test-schema.json`]: JSON.stringify(testSchemaStarter),
    [`${schemaName}/test/test-suites-map.js`]: testSuiteMap,
    [`${schemaName}/test/fixtures/valid-certificate-1.json`]: '{}',
    [`${schemaName}/test/fixtures/invalid-certificate-1.json`]: '{}',
  };
  if (createHbs) fileNameMap[`${schemaName}/${schemaName}.hbs`] = '';

  if (!fs.existsSync(schemaName)) {
    fs.mkdirSync(resolve(`${schemaName}/test/fixtures`), { recursive: true });
    Object.keys(fileNameMap).forEach((key) => writeFile(key, fileNameMap[key]));
    console.log(`Directory ${schemaName} and starter files created`);
  } else {
    throw new Error(`Directory ${schemaName} already exists`);
  }
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
