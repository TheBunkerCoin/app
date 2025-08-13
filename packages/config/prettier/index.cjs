/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  printWidth: 100,
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: "always",
  overrides: [
    {
      files: ["*.md"],
      options: {
        proseWrap: "always"
      }
    }
  ]
};


