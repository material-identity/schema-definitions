const validCertTestSuitesMap = [
  {
    certificateName: 'valid_certificate_1',
  },
  {
    certificateName: 'valid_certificate_2',
  },
  {
    certificateName: 'valid_certificate_3',
  },
  {
    certificateName: 'valid_certificate_4',
  },
  {
    certificateName: 'valid_certificate_5',
  },
];
const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid_certificate_1',
    expectedErrors: [
      {
        instancePath: '/B10/Value',
        schemaPath: 'measurement.json#/definitions/Measurement/properties/Value/type',
        keyword: 'type',
        params: { type: 'number' },
        message: 'must be number',
      },
    ],
  },
  {
    certificateName: 'invalid_certificate_2',
    expectedErrors: [
      {
        instancePath: '/B10/Value',
        schemaPath: 'measurement.json#/definitions/Measurement/properties/Value/type',
        keyword: 'type',
        params: { type: 'number' },
        message: 'must be number',
      },
    ],
  },
  {
    certificateName: 'invalid_certificate_3',
    expectedErrors: [
      {
        instancePath: '/B10',
        schemaPath: 'measurement.json#/definitions/Measurement/required',
        keyword: 'required',
        params: { missingProperty: 'Value' },
        message: "must have required property 'Value'",
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
