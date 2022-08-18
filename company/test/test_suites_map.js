const validCertTestSuitesMap = [
  {
    certificateName: `valid_certificate_1`,
  },
  {
    certificateName: `valid_certificate_2`,
  },
  {
    certificateName: `valid_certificate_3`,
  },
  {
    certificateName: `valid_certificate_4`,
  },
  {
    certificateName: `valid_certificate_5`,
  },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: `invalid_certificate_1`,
    expectedErrors: [
      {
        instancePath: '',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'A01' },
        message: "must have required property 'A01'",
      },
    ],
  },
  {
    certificateName: `invalid_certificate_2`,
    expectedErrors: [
      {
        instancePath: '/A01',
        schemaPath: '#/definitions/CompanyBase/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Name' },
        message: "must have required property 'Name'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/definitions/CompanyBase/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'CompanyName' },
        message: "must have required property 'CompanyName'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/definitions/CompanyBase/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Identifiers' },
        message: "must have required property 'Identifiers'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'Identifier' },
        message: "must have required property 'Identifier'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
  {
    certificateName: `invalid_certificate_3`,
    expectedErrors: [
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Identifiers' },
        message: "must have required property 'Identifiers'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'Identifier' },
        message: "must have required property 'Identifier'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
  {
    certificateName: `invalid_certificate_4`,
    expectedErrors: [
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Identifiers' },
        message: "must have required property 'Identifiers'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'Identifier' },
        message: "must have required property 'Identifier'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
  {
    certificateName: `invalid_certificate_5`,
    expectedErrors: [
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Identifiers' },
        message: "must have required property 'Identifiers'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'Identifier' },
        message: "must have required property 'Identifier'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
  {
    certificateName: `invalid_certificate_6`,
    expectedErrors: [
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Identifiers' },
        message: "must have required property 'Identifiers'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'Identifier' },
        message: "must have required property 'Identifier'",
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
  {
    certificateName: `invalid_certificate_7`,
    expectedErrors: [
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Identifiers' },
        message: "must have required property 'Identifiers'",
      },
      {
        instancePath: '/A01/Identifier',
        schemaPath: '#/definitions/CompanyIdentifiers/anyOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'VAT' },
        message: "must have required property 'VAT'",
      },
      {
        instancePath: '/A01/Identifier',
        schemaPath: '#/definitions/CompanyIdentifiers/anyOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'DUNS' },
        message: "must have required property 'DUNS'",
      },
      {
        instancePath: '/A01/Identifier',
        schemaPath: '#/definitions/CompanyIdentifiers/anyOf',
        keyword: 'anyOf',
        params: {},
        message: 'must match a schema in anyOf',
      },
      {
        instancePath: '/A01',
        schemaPath: '#/allOf/2/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
