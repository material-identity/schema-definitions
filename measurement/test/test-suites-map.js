const validCertTestSuitesMap = [
  {
    certificateName: 'valid-certificate-1',
  },
  {
    certificateName: 'valid-certificate-2',
  },
  {
    certificateName: 'valid-certificate-3',
  },
  {
    certificateName: 'valid-certificate-4',
  },
  {
    certificateName: 'valid-certificate-5',
  },
];
const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid-certificate-1',
    expectedErrors: [
      {
        instancePath: '/Certificate/B10/Value',
        schemaPath:
          'measurement.json#/definitions/Measurement/properties/Value/type',
        keyword: 'type',
        params: { type: 'number' },
        message: 'must be number',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [
      {
        instancePath: '/Certificate/B10/Value',
        schemaPath:
          'measurement.json#/definitions/Measurement/properties/Value/type',
        keyword: 'type',
        params: { type: 'number' },
        message: 'must be number',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [
      {
        instancePath: '/Certificate/B10',
        schemaPath: 'measurement.json#/definitions/Measurement/required',
        keyword: 'required',
        params: { missingProperty: 'Value' },
        message: "must have required property 'Value'",
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
