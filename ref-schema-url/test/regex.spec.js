const {
  definitions: {
    RefSchemaUrl: { pattern },
  },
} = require('../ref-schema-url.json');

const regex = new RegExp(pattern);

describe('tests valid strings against the RefSchemaUrl regexp', () => {
  const validStrings = [
    'https://schemas.s1seven.com/en10168-schemas/v0.3.0/schema.json',
    'http://schemas.s1seven.com/en10168-schemas/v0.3.0/schema.json',
    'https://schemas.s1seven.com/coa-schemas/v0.2.0/schema.json',
    'https://schemas.s1seven.com/coa-schemas/v0.2.0-1/schema.json',
    'https://schemas.s1seven.com/coa-schemas/v0.2.0-5/schema.json',
    'https://schemas.s1seven.com/coa-schemas/v1.0.0/schema.json',
    'https://schemas.s1seven.com/coa-schemas/v1.0.1/schema.json',
    'https://schemas.s1seven.com/e-coc-schemas/v1.0.0/schema.json',
    'https://schemas.s1seven.com/en10168-schemas/v0.0.2/schema.json',
    'https://schemas.s1seven.com/schema-definitions/v0.0.5/attachment/attachment.json',
    'https://schemas.s1seven.com/schema-definitions/v0.0.5/key-value-object/key-value-object.json',
    'https://schemas.s1seven.com/schema-definitions/v0.0.5/product-description/product-description.json',
    'https://schemas.s1seven.com/test/v0.3.0/schema.json',
    'https://schemas.s1seven.com/test/v0.22.0/schema.json',
    'https://schemas.s1seven.com/test/v0.2.0-11/schema.json',
  ];
  validStrings.forEach((string) => {
    it(`${string} is valid`, () => {
      const matchedString = regex.exec(string)[0];
      expect(matchedString).toBe(string);
    });
  });
});

describe('tests invalid strings against the RefSchemaUrl regexp', () => {
  const invalidStrings = [
    'schemas.s1seven.com/en10168-schemas/v0.3.0/schema.json',
    'https://schemas.s1seven.com/en10168-schemas/v0.0/schema.json',
    'https://schemas.s1seven.com/en10168-schemas/v0.3.0/schema',
    'https://schemas.s1seven.com/en10168-schemas/v0.3.0/schema.js',
    'https://schemas.s1seven.com/en10168-schemas/v0.3.0/',
    'https://schemas.s1seven.com/en10168-schemas/schema.json',
    'https://schemas.s1seven.com/v0.3.0/schema.json',
    'www.schemas.s1seven.com/en10168-schemas/v0.3.0/schema.json',
    'https://schemas.s1seven.co.uk/en10168-schemas/v0.3.0/schema.json',
    'https://schemas.s1seven.com/en10168-schemas/0.3.0/schema.json',
    'https://schemas.s1seven.com/en10168-schemas/v0.3.x/schema.json',
    'https://schemas.s1seven.com/en10168-schemas/v0.30/schema.json',
  ];
  invalidStrings.forEach((string) => {
    it(`${string} is invalid`, () => {
      const matchedString = regex.exec(string);
      expect(matchedString).toBe(null);
    });
  });
});
