module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'auto',
  useTabs: false,
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
};
