const validCertTestSuitesMap = [
  { certificateName: 'valid-certificate-1' },
  { certificateName: 'valid-certificate-2' },
  { certificateName: 'valid-certificate-3' },
  { certificateName: 'valid-certificate-4' },
  { certificateName: 'valid-certificate-5' },
  { certificateName: 'valid-certificate-6' },
  { certificateName: 'valid-certificate-7' },
  { certificateName: 'valid-certificate-8' },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid-certificate-1',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalElement/Maximum',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Maximum/maximum',
        keyword: 'maximum',
        params: { comparison: '<=', limit: 100 },
        message: 'must be <= 100',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalElement/Minimum',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Minimum/minimum',
        keyword: 'minimum',
        params: { comparison: '>=', limit: 0 },
        message: 'must be >= 0',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalElement/Symbol',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Symbol/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-4',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalElement/Actual',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Actual/maximum',
        keyword: 'maximum',
        params: { comparison: '<=', limit: 100 },
        message: 'must be <= 100',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-5',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalElement/Actual',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Actual/minimum',
        keyword: 'minimum',
        params: { comparison: '>=', limit: 0 },
        message: 'must be >= 0',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-6',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalElement/Actual',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Actual/type',
        keyword: 'type',
        params: { type: 'number' },
        message: 'must be number',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-7',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalElement/Maximum',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Maximum/type',
        keyword: 'type',
        params: { type: 'number' },
        message: 'must be number',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-8',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalElement/Minimum',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Minimum/type',
        keyword: 'type',
        params: { type: 'number' },
        message: 'must be number',
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
