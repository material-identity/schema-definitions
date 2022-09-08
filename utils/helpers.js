const { resolve, join, parse } = require('path');
const { readFileSync } = require('fs');
const { get } = require('lodash');
const { refMap } = require('./constants');

// environment must be either 'lcoal' or 'remote'
function generateUpdatedSchemaObjects(newPath, environment) {
  const allowedEnvs = ['remote', 'local'];
  if (!allowedEnvs.includes(environment))
    throw new TypeError(`Environment should be one of ${allowedEnvs}`);

  // creates an object map with the path to the schema as the key and the updated schema object as the value
  const updatedSchemaMap = {};

  Object.keys(refMap).forEach((directory) => {
    const filePath = `${directory}/${directory}.json`;
    const pathToSchema = resolve(__dirname, '../', filePath);

    const jsonSchema = readFileSync(pathToSchema);
    const schemaObject = JSON.parse(jsonSchema);

    refMap[directory].forEach((property) => {
      const propertyLookupPath = `['definitions'][${property}]['allOf'][0]`;
      const referenceObj = get(schemaObject, propertyLookupPath);
      const currentRef = referenceObj['$ref'];
      const currentPath = currentRef.split('#/')[0]; // e.g. ../key-value-object.json
      const { base: fileName, name: folderName } = parse(currentPath);
      const pathToReplace = currentRef.split(fileName)[0]; // e.g. ../
      const replacementPath =
        environment === 'local'
          ? join(newPath, '/')
          : join(newPath, folderName, '/');

      referenceObj['$ref'] = currentRef.replace(pathToReplace, replacementPath);
    });

    updatedSchemaMap[filePath] = schemaObject;
  });

  return updatedSchemaMap;
}

module.exports = {
  generateUpdatedSchemaObjects,
};
