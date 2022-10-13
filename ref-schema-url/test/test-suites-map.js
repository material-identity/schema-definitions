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
  { certificateName: 'valid-certificate-12' },
  { certificateName: 'valid-certificate-13' },
  { certificateName: 'valid-certificate-14' },
];

const patternErrorObject = {
  instancePath: '/RefSchemaUrl',
  schemaPath: 'ref-schema-url.json#/definitions/RefSchemaUrl/pattern',
  keyword: 'pattern',
  params: {
    pattern:
      '(https?://[a-z0-9/\\.\\-]+[\\.a-z+])/([a-z0-9\\-]+)/(v\\d+\\.\\d+\\.\\d+(-\\d+)?)/([a-z\\./\\-]+.json)',
  },
  message:
    'must match pattern "(https?://[a-z0-9/\\.\\-]+[\\.a-z+])/([a-z0-9\\-]+)/(v\\d+\\.\\d+\\.\\d+(-\\d+)?)/([a-z\\./\\-]+.json)"',
};

const invalidCertTestSuitesMap = [
  {
    certificateName: 'invalid-certificate-1',
    expectedErrors: [patternErrorObject],
  },
  {
    certificateName: 'invalid-certificate-2',
    expectedErrors: [patternErrorObject],
  },
  {
    certificateName: 'invalid-certificate-3',
    expectedErrors: [patternErrorObject],
  },
  {
    certificateName: 'invalid-certificate-4',
    expectedErrors: [patternErrorObject],
  },
  {
    certificateName: 'invalid-certificate-5',
    expectedErrors: [patternErrorObject],
  },
  {
    certificateName: 'invalid-certificate-6',
    expectedErrors: [patternErrorObject],
  },
  {
    certificateName: 'invalid-certificate-7',
    expectedErrors: [patternErrorObject],
  },
  {
    certificateName: 'invalid-certificate-8',
    expectedErrors: [patternErrorObject],
  },
  {
    certificateName: 'invalid-certificate-9',
    expectedErrors: [patternErrorObject],
  },
  {
    certificateName: 'invalid-certificate-10',
    expectedErrors: [patternErrorObject],
  },
  {
    certificateName: 'invalid-certificate-11',
    expectedErrors: [patternErrorObject],
  },
];

module.exports = { validCertTestSuitesMap, invalidCertTestSuitesMap };
