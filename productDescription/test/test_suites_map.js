const validCertTestSuitesMap = [
  { certificateName: 'valid_certificate_1' },
  { certificateName: 'valid_certificate_2' },
  { certificateName: 'valid_certificate_3' },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid_certificate_1',
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
    certificateName: 'invalid_certificate_2',
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
    certificateName: 'invalid_certificate_3',
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
    certificateName: 'invalid_certificate_4',
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
    certificateName: 'invalid_certificate_5',
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
    certificateName: 'invalid_certificate_6',
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
    certificateName: 'invalid_certificate_7',
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
