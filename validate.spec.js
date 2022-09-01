const { loadExternalFile } = require('@s1seven/schema-tools-utils');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const { readFileSync } = require('fs');
const { resolve, join, parse } = require('path');

const folders = [
  'attachment',
  'chemical-element',
  'commercial-transaction',
  'company',
  'key-value-object',
  'languages',
  'measurement',
  'product-description',
  'validation',
];

folders.forEach((folder) => {
  const { validCertTestSuitesMap, invalidCertTestSuitesMap } = require(resolve(
    __dirname,
    `${folder}/test/test-suites-map.js`,
  ));

  const createAjvInstance = () => {
    const ajv = new Ajv({
      loadSchema: (uri) => {
        const { name: folderName } = parse(uri);
        const isRemoteUri = uri.startsWith('http');
        const path = isRemoteUri ? uri : join(__dirname, folderName, uri);
        return loadExternalFile(path, 'json');
      },
      strictSchema: true,
      strictNumbers: true,
      strictRequired: true,
      strictTypes: true,
      allErrors: true,
    });
    ajv.addKeyword('meta:license');
    addFormats(ajv);
    return ajv;
  };

  describe(`Validate ${folder} schema`, function () {
    const testSchemaPath = resolve(__dirname, `${folder}/test-schema.json`);
    const testSchema = JSON.parse(readFileSync(testSchemaPath, 'utf-8'));

    it('the schema should validate', async () => {
      const validateSchema = await createAjvInstance().compileAsync(testSchema);
      expect(() => validateSchema()).not.toThrow();
    });

    validCertTestSuitesMap.forEach(({ certificateName }) => {
      it(`${certificateName} should be a valid certificate`, async () => {
        const certificatePath = resolve(__dirname, `${folder}/test/fixtures/${certificateName}.json`);
        const certificate = JSON.parse(readFileSync(certificatePath, 'utf8'));
        const validator = await createAjvInstance().compileAsync(testSchema);
        //
        const isValid = await validator(certificate);
        expect(isValid).toBe(true);
        expect(validator.errors).toBeNull();
      });
    });

    invalidCertTestSuitesMap.forEach(({ certificateName, expectedErrors }) => {
      it(`${certificateName} should be an invalid certificate`, async () => {
        const certificatePath = resolve(__dirname, `${folder}/test/fixtures/${certificateName}.json`);
        const certificate = JSON.parse(readFileSync(certificatePath, 'utf8'));
        const validator = await createAjvInstance().compileAsync(testSchema);
        //
        const isValid = await validator(certificate);
        expect(isValid).toBe(false);
        expect(validator.errors).toEqual(expectedErrors);
      });
    });
  });
});
