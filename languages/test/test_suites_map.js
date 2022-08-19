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
  {
    certificateName: `valid_certificate_6`,
  },
];

const invalidCertTestSuitesMap = [
  {
    certificateName: `invalid_certificate_1`,
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
    certificateName: `invalid_certificate_2`,
    expectedErrors: [
      {
        instancePath: '/Certificate/CertificateLanguages',
        schemaPath: 'languages.json#/definitions/CertificateLanguages/uniqueItems',
        keyword: 'uniqueItems',
        params: { i: 1, j: 0 },
        message: 'must NOT have duplicate items (items ## 0 and 1 are identical)',
      },
    ],
  },
  {
    certificateName: `invalid_certificate_3`,
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
    certificateName: `invalid_certificate_4`,
    expectedErrors: [
      {
        instancePath: '/Certificate/CertificateLanguages/0',
        schemaPath: 'languages.json#/definitions/CertificateLanguages/items/enum',
        keyword: 'enum',
        params: { allowedValues: ['EN', 'DE', 'FR', 'ES', 'PL', 'CN', 'TR', 'IT'] },
        message: 'must be equal to one of the allowed values',
      },
    ],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
