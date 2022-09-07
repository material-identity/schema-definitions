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
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Z01' },
        message: "must have required property 'Z01'",
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'Z01' },
        message: "must have required property 'Z01'",
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf',
        keyword: 'anyOf',
        params: {},
        message: 'must match a schema in anyOf',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'Z02' },
        message: 'must NOT have unevaluated properties',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Z02' },
        message: "must have required property 'Z02'",
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'Z02' },
        message: "must have required property 'Z02'",
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf',
        keyword: 'anyOf',
        params: {},
        message: 'must match a schema in anyOf',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Z01' },
        message: "must have required property 'Z01'",
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf/0/required',
        keyword: 'required',
        params: { missingProperty: 'Z02' },
        message: "must have required property 'Z02'",
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'Z01' },
        message: "must have required property 'Z01'",
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf/1/required',
        keyword: 'required',
        params: { missingProperty: 'Z02' },
        message: "must have required property 'Z02'",
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf',
        keyword: 'anyOf',
        params: {},
        message: 'must match a schema in anyOf',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-4',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/allOf/1/anyOf/0/properties/Z04/required',
        keyword: 'required',
        params: { missingProperty: 'CE_Image' },
        message: "must have required property 'CE_Image'",
      },
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/allOf/1/anyOf/1/properties/Z04/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf',
        keyword: 'anyOf',
        params: {},
        message: 'must match a schema in anyOf',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'Z02' },
        message: 'must NOT have unevaluated properties',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'Z04' },
        message: 'must NOT have unevaluated properties',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'SupplementaryInformation' },
        message: 'must NOT have unevaluated properties',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-5',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/allOf/1/anyOf/0/properties/Z04/required',
        keyword: 'required',
        params: { missingProperty: 'DoCNumber' },
        message: "must have required property 'DoCNumber'",
      },
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/allOf/1/anyOf/1/properties/Z04/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf',
        keyword: 'anyOf',
        params: {},
        message: 'must match a schema in anyOf',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'Z02' },
        message: 'must NOT have unevaluated properties',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'Z04' },
        message: 'must NOT have unevaluated properties',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'SupplementaryInformation' },
        message: 'must NOT have unevaluated properties',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-6',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/allOf/1/anyOf/0/properties/Z04/required',
        keyword: 'required',
        params: { missingProperty: 'NotifiedBodyNumber' },
        message: "must have required property 'NotifiedBodyNumber'",
      },
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/allOf/1/anyOf/1/properties/Z04/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf',
        keyword: 'anyOf',
        params: {},
        message: 'must match a schema in anyOf',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'Z02' },
        message: 'must NOT have unevaluated properties',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'Z04' },
        message: 'must NOT have unevaluated properties',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'SupplementaryInformation' },
        message: 'must NOT have unevaluated properties',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-7',
    expectedErrors: [
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/allOf/1/anyOf/0/properties/Z04/required',
        keyword: 'required',
        params: { missingProperty: 'DoCYear' },
        message: "must have required property 'DoCYear'",
      },
      {
        instancePath: '/Certificate/Validation/Z04',
        schemaPath: '#/allOf/1/anyOf/1/properties/Z04/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/allOf/1/anyOf',
        keyword: 'anyOf',
        params: {},
        message: 'must match a schema in anyOf',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'Z02' },
        message: 'must NOT have unevaluated properties',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'Z04' },
        message: 'must NOT have unevaluated properties',
      },
      {
        instancePath: '/Certificate/Validation',
        schemaPath: '#/unevaluatedProperties',
        keyword: 'unevaluatedProperties',
        params: { unevaluatedProperty: 'SupplementaryInformation' },
        message: 'must NOT have unevaluated properties',
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
