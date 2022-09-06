const validCertTestSuitesMap = [
  { certificateName: 'valid-certificate-1' },
  { certificateName: 'valid-certificate-2' },
  { certificateName: 'valid-certificate-3' },
  { certificateName: 'valid-certificate-4' },
  { certificateName: 'valid-certificate-5' },
  { certificateName: 'valid-certificate-6' },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid-certificate-1',
    expectedErrors: [
      {
        instancePath: '/Certificate/CommercialTransaction',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'A01' },
        message: "must have required property 'A01'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [
      {
        instancePath: '/Certificate/CommercialTransaction',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'A02' },
        message: "must have required property 'A02'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [
      {
        instancePath: '/Certificate/CommercialTransaction',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'A03' },
        message: "must have required property 'A03'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-4',
    expectedErrors: [
      {
        instancePath: '/Certificate/CommercialTransaction',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'A04' },
        message: "must have required property 'A04'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-5',
    expectedErrors: [
      {
        instancePath: '/Certificate/CommercialTransaction',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'A05' },
        message: "must have required property 'A05'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-6',
    expectedErrors: [
      {
        instancePath: '/Certificate/CommercialTransaction',
        schemaPath: '#/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'A06' },
        message: "must have required property 'A06'",
      },
      {
        instancePath: '/Certificate/CommercialTransaction',
        schemaPath: '#/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'A06.1' },
        message: "must have required property 'A06.1'",
      },
      {
        instancePath: '/Certificate/CommercialTransaction',
        schemaPath: '#/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
