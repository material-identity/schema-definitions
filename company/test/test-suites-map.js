const validCertTestSuitesMap = [
  {
    certificateName: `valid-certificate-1`,
  },
  {
    certificateName: `valid-certificate-2`,
  },
  {
    certificateName: `valid-certificate-3`,
  },
  {
    certificateName: `valid-certificate-4`,
  },
  {
    certificateName: `valid-certificate-5`,
  },
  {
    certificateName: `valid-certificate-6`,
  },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: `invalid-certificate-1`,
    expectedErrors: [
      {
        instancePath: '/Certificate',
        schemaPath: '#/properties/Certificate/required',
        keyword: 'required',
        params: { missingProperty: 'A01' },
        message: "must have required property 'A01'",
      },
    ],
  },
  {
    certificateName: `invalid-certificate-2`,
    expectedErrors: [
      {
        instancePath: '/Certificate/A01',
        schemaPath: '#/definitions/CompanyBase/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Name' },
        message: "must have required property 'Name'",
      },
      {
        instancePath: '/Certificate/A01',
        schemaPath: '#/definitions/CompanyBase/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'CompanyName' },
        message: "must have required property 'CompanyName'",
      },
      {
        instancePath: '/Certificate/A01',
        schemaPath: '#/definitions/CompanyBase/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
  {
    certificateName: `invalid-certificate-3`,
    expectedErrors: [
      {
        instancePath: '/Certificate/A01/Identifiers',
        schemaPath: '#/definitions/CompanyIdentifiers/anyOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'VAT' },
        message: "must have required property 'VAT'",
      },
      {
        instancePath: '/Certificate/A01/Identifiers',
        schemaPath: '#/definitions/CompanyIdentifiers/anyOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'DUNS' },
        message: "must have required property 'DUNS'",
      },
      {
        instancePath: '/Certificate/A01/Identifiers',
        schemaPath: '#/definitions/CompanyIdentifiers/anyOf',
        keyword: 'anyOf',
        params: {},
        message: 'must match a schema in anyOf',
      },
    ],
  },
  {
    certificateName: `invalid-certificate-4`,
    expectedErrors: [
      {
        instancePath: '/Certificate/A01',
        schemaPath: '#/definitions/CompanyAddress/required',
        keyword: 'required',
        params: { missingProperty: 'Street' },
        message: "must have required property 'Street'",
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
