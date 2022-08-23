const validCertTestSuitesMap = [
  { certificateName: 'valid_certificate_1' },
  { certificateName: 'valid_certificate_2' },
  { certificateName: 'valid_certificate_3' },
  { certificateName: 'valid_certificate_4' },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid_certificate_1',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'Z01' },
        message: "must have required property 'Z01'",
      },
    ],
  },
  {
    certificateName: 'invalid_certificate_2',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'Z02' },
        message: "must have required property 'Z02'",
      },
    ],
  },
  {
    certificateName: 'invalid_certificate_3',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'Z01' },
        message: "must have required property 'Z01'",
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'Z02' },
        message: "must have required property 'Z02'",
      },
    ],
  },
  {
    certificateName: 'invalid_certificate_4',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/properties/Z04/required',
        keyword: 'required',
        params: { missingProperty: 'CE_Image' },
        message: "must have required property 'CE_Image'",
      },
    ],
  },
  {
    certificateName: 'invalid_certificate_5',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/properties/Z04/required',
        keyword: 'required',
        params: { missingProperty: 'DoCNumber' },
        message: "must have required property 'DoCNumber'",
      },
    ],
  },
  {
    certificateName: 'invalid_certificate_6',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/properties/Z04/required',
        keyword: 'required',
        params: { missingProperty: 'NotifiedBodyNumber' },
        message: "must have required property 'NotifiedBodyNumber'",
      },
    ],
  },
  {
    certificateName: 'invalid_certificate_7',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/properties/Z04/required',
        keyword: 'required',
        params: { missingProperty: 'DoCYear' },
        message: "must have required property 'DoCYear'",
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
