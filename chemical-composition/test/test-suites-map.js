const validCertTestSuitesMap = [
  { certificateName: 'valid-certificate-1' },
  { certificateName: 'valid-certificate-2' },
  { certificateName: 'valid-certificate-3' },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid-certificate-1',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalComposition/C71/Actual',
        keyword: 'maximum',
        message: 'must be <= 100',
        params: {
          comparison: '<=',
          limit: 100,
        },
        schemaPath: '#/definitions/ChemicalElement/properties/Actual/maximum',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalComposition/C71',
        keyword: 'required',
        message: "must have required property 'Actual'",
        params: {
          missingProperty: 'Actual',
        },
        schemaPath: '#/definitions/ChemicalElement/required',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalComposition/C71',
        keyword: 'required',
        message: "must have required property 'Symbol'",
        params: {
          missingProperty: 'Symbol',
        },
        schemaPath: '#/definitions/ChemicalElement/required',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-4',
    expectedErrors: [
      {
        instancePath: '/Certificate/ChemicalComposition',
        keyword: 'additionalProperties',
        message: 'must NOT have additional properties',
        params: {
          additionalProperty: 'C68',
        },
        schemaPath: '#/additionalProperties',
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
