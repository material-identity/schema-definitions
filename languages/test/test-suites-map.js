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
        instancePath: '/Certificate/CertificateLanguages',
        schemaPath: 'languages.json#/definitions/CertificateLanguages/minItems',
        keyword: 'minItems',
        params: { limit: 1 },
        message: 'must NOT have fewer than 1 items',
      },
    ],
  },
  {
    certificateName: `invalid-certificate-2`,
    expectedErrors: [
      {
        instancePath: '/Certificate/CertificateLanguages',
        schemaPath:
          'languages.json#/definitions/CertificateLanguages/uniqueItems',
        keyword: 'uniqueItems',
        params: { i: 1, j: 0 },
        message:
          'must NOT have duplicate items (items ## 0 and 1 are identical)',
      },
    ],
  },
  {
    certificateName: `invalid-certificate-3`,
    expectedErrors: [
      {
        instancePath: '/Certificate/CertificateLanguages',
        schemaPath: 'languages.json#/definitions/CertificateLanguages/maxItems',
        keyword: 'maxItems',
        params: { limit: 2 },
        message: 'must NOT have more than 2 items',
      },
    ],
  },
  {
    certificateName: `invalid-certificate-4`,
    expectedErrors: [
      {
        instancePath: '/Certificate/CertificateLanguages/0',
        schemaPath:
          'languages.json#/definitions/CertificateLanguages/items/enum',
        keyword: 'enum',
        params: {
          allowedValues: ['EN', 'DE', 'FR', 'ES', 'PL', 'CN', 'TR', 'IT'],
        },
        message: 'must be equal to one of the allowed values',
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
