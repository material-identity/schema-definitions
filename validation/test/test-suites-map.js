const validCertTestSuitesMap = [
  { certificateName: 'valid-certificate-1' },
  { certificateName: 'valid-certificate-2' },
  { certificateName: 'valid-certificate-3' },
  { certificateName: 'valid-certificate-4' },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid-certificate-1',
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
    certificateName: 'invalid-certificate-2',
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
    certificateName: 'invalid-certificate-3',
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
    certificateName: 'invalid-certificate-4',
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
    certificateName: 'invalid-certificate-5',
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
    certificateName: 'invalid-certificate-6',
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
    certificateName: 'invalid-certificate-7',
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
