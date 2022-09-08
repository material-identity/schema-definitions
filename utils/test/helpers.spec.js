const {
  getSchemaObjsWithUpdatedRefs,
  setLocalIds,
  commitChanges,
} = require('../helpers');
const { refMap, defaultServerUrl, folders } = require('../constants');
const { get } = require('lodash');
const child_process = require('child_process');

jest.mock('child_process');

describe('getSchemaObjsWithUpdatedRefs() should generate local refs', function () {
  const schemaMap = getSchemaObjsWithUpdatedRefs('../', 'local');

  it('it should contain 1 key for every key in refMap', async () => {
    expect(Object.keys(schemaMap).length).toBe(Object.keys(refMap).length);
  });

  it('the $ref should be a local filename', async () => {
    Object.keys(refMap).forEach((folder) => {
      const schemaObject = schemaMap[`${folder}/${folder}.json`];

      refMap[folder].forEach((property) => {
        const propertyLookupPath = `['definitions'][${property}]['allOf'][0]`;
        const referenceObj = get(schemaObject, propertyLookupPath);
        const currentRef = referenceObj['$ref'];
        expect(currentRef).toMatch(new RegExp('^../'));
        expect(currentRef).toMatch(new RegExp(property));
        expect(currentRef).not.toMatch(new RegExp(defaultServerUrl));
      });
    });
  });
});

describe('getSchemaObjsWithUpdatedRefs() should generate remote refs', function () {
  const version = 'v0.0.1';
  const schemaMap = getSchemaObjsWithUpdatedRefs(
    defaultServerUrl,
    'remote',
    version,
  );

  it('it should contain 1 key for every key in refMap', async () => {
    expect(Object.keys(schemaMap).length).toBe(Object.keys(refMap).length);
  });

  it('the $ref should be a remote filename', async () => {
    Object.keys(refMap).forEach((folder) => {
      const schemaObject = schemaMap[`${folder}/${folder}.json`];

      refMap[folder].forEach((property) => {
        const propertyLookupPath = `['definitions'][${property}]['allOf'][0]`;
        const referenceObj = get(schemaObject, propertyLookupPath);
        const currentRef = referenceObj['$ref'];
        expect(currentRef).toMatch(new RegExp(defaultServerUrl));
        expect(currentRef).toMatch(new RegExp(version));
      });
    });
  });
});

describe('setLocalIds() should generate local ids', function () {
  const schemaMap = setLocalIds({});

  it('it should contain 1 key for every key in refMap', async () => {
    expect(Object.keys(schemaMap).length).toBe(folders.length);
  });

  it('the $id should be a filename', async () => {
    Object.keys(schemaMap).forEach((folder) => {
      const fileName = folder.split('/')[1];
      const id = schemaMap[folder]['$id'];
      expect(id).toBe(fileName);
    });
  });
});

describe('commitChanges() should correctly set the commit message', function () {
  commitChanges('test');

  it('the commit message should be correctly set', () => {
    expect(child_process.execSync).toHaveBeenCalledWith(
      `git commit -m 'test' --no-verify`,
    );
  });
});
