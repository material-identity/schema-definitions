const folders = [
  'attachment',
  'chemical-element',
  'commercial-transaction',
  'company',
  'key-value-object',
  'languages',
  'measurement',
  'product-description',
  'validation',
];

// key is the directory name, value is an array containing the properties whose refs need to be updated
const refMap = {
  'commercial-transaction': ['KeyValueObject', 'Company'],
  'product-description': ['KeyValueObject', 'Measurement'],
  validation: ['KeyValueObject'],
};

const defaultServerUrl = 'https://schemas.s1seven.com/schema-definitions';

function addVToVersionNumber(versionNumber) {
  return versionNumber.startsWith('v') ? versionNumber : `v${versionNumber}`;
}

module.exports = {
  addVToVersionNumber,
  defaultServerUrl,
  folders,
  refMap,
};
