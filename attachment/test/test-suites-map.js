const validCertTestSuitesMap = [{ certificateName: 'valid-certificate-1' }, { certificateName: 'valid-certificate-2' }];

const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid-certificate-1',
    expectedErrors: [
      {
        instancePath: '/Certificate/Attachments',
        schemaPath: '#/properties/Certificate/properties/Attachments/minItems',
        keyword: 'minItems',
        params: { limit: 1 },
        message: 'must NOT have fewer than 1 items',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [
      {
        instancePath: '/Certificate/Attachments',
        schemaPath: '#/properties/Certificate/properties/Attachments/uniqueItems',
        keyword: 'uniqueItems',
        params: { i: 1, j: 0 },
        message: 'must NOT have duplicate items (items ## 0 and 1 are identical)',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [
      {
        instancePath: '/Certificate/Attachments/0',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'Hash' },
        message: "must have required property 'Hash'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-4',
    expectedErrors: [
      {
        instancePath: '/Certificate/Attachments/0',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'FileName' },
        message: "must have required property 'FileName'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-5',
    expectedErrors: [
      {
        instancePath: '/Certificate/Attachments/0',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'MIME-Type' },
        message: "must have required property 'MIME-Type'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-6',
    expectedErrors: [
      {
        instancePath: '/Certificate/Attachments/0',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'Encoding' },
        message: "must have required property 'Encoding'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-7',
    expectedErrors: [
      {
        instancePath: '/Certificate/Attachments/0',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'Data' },
        message: "must have required property 'Data'",
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
