const { resolve, join, parse } = require('path');
const { readFileSync } = require('fs');
const { get } = require('lodash');
const { refMap, folders } = require('./constants');
const { execSync } = require('child_process');

function generateUrl(newPath, version, folderName) {
  const { pathname: baseFolderName } = new URL(newPath);
  const { href } = new URL(
    `${baseFolderName}/${version}/${folderName}/`,
    newPath,
  );

  return href;
}

function getReplacementPaths(currentRef, environment, newPath, version) {
  const currentPath = currentRef.split('#/')[0]; // e.g. ../key-value-object.json
  const { base: fileName, name: folderName } = parse(currentPath);

  const pathToReplace = currentRef.split(fileName)[0]; // e.g. ../
  const replacementPath =
    environment === 'local'
      ? join(newPath, '/')
      : generateUrl(newPath, version, folderName);

  return { pathToReplace, replacementPath };
}

// environment must be either 'local' or 'remote'
function generateUpdatedSchemaObjects(newPath, environment, version = null) {
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

      const { pathToReplace, replacementPath } = getReplacementPaths(
        currentRef,
        environment,
        newPath,
        version,
      );

      referenceObj['$ref'] = currentRef.replace(pathToReplace, replacementPath);
    });

    updatedSchemaMap[filePath] = schemaObject;
  });

  return updatedSchemaMap;
}

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

function commitChanges(message) {
  try {
    execSync(`git commit -m '${message}' --no-verify`);
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

module.exports = {
  commitChanges,
  generateUpdatedSchemaObjects,
  setLocalIds,
};
