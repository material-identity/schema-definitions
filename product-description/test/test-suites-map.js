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
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'B01' },
        message: "must have required property 'B01'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'B02' },
        message: "must have required property 'B02'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'B07' },
        message: "must have required property 'B07'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-4',
    expectedErrors: [
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'B08' },
        message: "must have required property 'B08'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-5',
    expectedErrors: [
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'B09' },
        message: "must have required property 'B09'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-6',
    expectedErrors: [
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'B10' },
        message: "must have required property 'B10'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-7',
    expectedErrors: [
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'B13' },
        message: "must have required property 'B13'",
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
