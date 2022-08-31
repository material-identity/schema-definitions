// key is the directory name, value is an array containing the properties whose refs need to be updated
const refMap = {
  'commercial-transaction': ['KeyValueObject', 'Company'],
  'product-description': ['KeyValueObject', 'Measurement'],
  validation: ['KeyValueObject'],
};

const defaultServerUrl = 'https://schemas.s1seven.com/shared';

module.exports = {
  defaultServerUrl,
  refMap,
};
