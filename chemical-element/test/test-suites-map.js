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
        instancePath: '/Certificate/ChemicalElement/Actual',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Actual/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
      {
        instancePath: '/Certificate/ChemicalElement/Minimum',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Minimum/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
      {
        instancePath: '/Certificate/ChemicalElement/Maximum',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/properties/Maximum/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalElement',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/required',
        keyword: 'required',
        params: { missingProperty: 'Symbol' },
        message: "must have required property 'Symbol'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalElement',
        schemaPath:
          'chemical-element.json#/definitions/ChemicalElement/required',
        keyword: 'required',
        params: { missingProperty: 'Actual' },
        message: "must have required property 'Actual'",
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
