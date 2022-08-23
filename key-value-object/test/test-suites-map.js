const validCertTestSuitesMap = [
  { certificateName: 'valid-certificate-1' },
  { certificateName: 'valid-certificate-2' },
  { certificateName: 'valid-certificate-3' },
  { certificateName: 'valid-certificate-4' },
  { certificateName: 'valid-certificate-5' },
  { certificateName: 'valid-certificate-6' },
  { certificateName: 'valid-certificate-7' },
  { certificateName: 'valid-certificate-8' },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid-certificate-1',
    expectedErrors: [
      {
        instancePath: '/Certificate/Z05/Type',
        schemaPath: 'key-value-object.json#/definitions/KeyValueObject/properties/Type/enum',
        keyword: 'enum',
        params: { allowedValues: ['string', 'number', 'date', 'date-time', 'boolean'] },
        message: 'must be equal to one of the allowed values',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [
      {
        instancePath: '/Certificate/Z05',
        schemaPath: 'key-value-object.json#/definitions/KeyValueObject/required',
        keyword: 'required',
        params: { missingProperty: 'Key' },
        message: "must have required property 'Key'",
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [
      {
        instancePath: '/Certificate/Z05/Key',
        schemaPath: 'key-value-object.json#/definitions/KeyValueObject/properties/Key/type',
        keyword: 'type',
        params: { type: 'string' },
        message: 'must be string',
      },
    ],
  },
  {
    certificateName: 'invalid-certificate-4',
    expectedErrors: [
      {
        instancePath: '/Certificate/Z05',
        schemaPath: 'key-value-object.json#/definitions/KeyValueObject/additionalProperties',
        keyword: 'additionalProperties',
        params: { additionalProperty: 'ExtraProperty' },
        message: 'must NOT have additional properties',
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
