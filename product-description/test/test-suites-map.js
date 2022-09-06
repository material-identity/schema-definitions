const validCertTestSuitesMap = [
  { certificateName: 'valid-certificate-1' },
  { certificateName: 'valid-certificate-2' },
  { certificateName: 'valid-certificate-3' },
  { certificateName: 'valid-certificate-4' },
  { certificateName: 'valid-certificate-5' },
  { certificateName: 'valid-certificate-6' },
  { certificateName: 'valid-certificate-7' },
  { certificateName: 'valid-certificate-8' },
  { certificateName: 'valid-certificate-9' },
  { certificateName: 'valid-certificate-10' },
  { certificateName: 'valid-certificate-11' },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid-certificate-1',
    expectedErrors: [
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'B01' },
        message: "must have required property 'B01'",
      },
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'B01' },
        message: "must have required property 'B01'",
      },
      {
        instancePath: '/Certificate/ProductDescription/B02',
        schemaPath: '#/oneOf/1/properties/B02/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'B02' },
        message: "must have required property 'B02'",
      },
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'B02' },
        message: "must have required property 'B02'",
      },
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'B09' },
        message: "must have required property 'B09'",
      },
      {
        instancePath: '/Certificate/ProductDescription/B02',
        schemaPath: '#/oneOf/1/properties/B02/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-4',
    expectedErrors: [
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'B01' },
        message: "must have required property 'B01'",
      },
      {
        instancePath: '/Certificate/ProductDescription/B02',
        schemaPath: '#/oneOf/0/properties/B02/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      },
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'B01' },
        message: "must have required property 'B01'",
      },
      {
        instancePath: '/Certificate/ProductDescription',
        schemaPath: '#/oneOf',
        keyword: 'oneOf',
        params: { passingSchemas: null },
        message: 'must match exactly one schema in oneOf',
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
