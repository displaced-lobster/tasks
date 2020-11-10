module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',


    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    // 'plugin:vue/essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    'airbnb-base'

  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',

  ],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.automation.config.js',
      }
    }
  },

  // add your custom rules here
  rules: {
    // --- CORE ESLINT RULES ---
    'arrow-body-style': ['off'], // don't care about use of braces in arrow functions
    'arrow-parens': ['off'], // don't care about use of parens in arrow functions
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }], // use the stroustrup brace style
    'comma-dangle': ['off'], // don't care about trailing commas
    'class-methods-use-this': ['off'], // it's ok to have a class method that doesn't use this
    'func-names': ['off'], // anonymous functions are ok
    'max-len': ['error', { code: 120 }], // code is not longer than 120 columns
    'no-console': ['off'], // it's ok to use console statements
    'no-continue': ['off'], // it's ok to use the continue statement
    // don't reassign function params, but it's ok to write to their properties
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': ['off'], // all ES syntax is ok
    'no-trailing-spaces': ['error', { skipBlankLines: true }], // trailing spaces only on blank lines
    // line breaks within object literals must be consistent and always used if there are at least 5 properties
    'object-curly-newline': ['error', { multiline: true, minProperties: 5, consistent: true }],
    'prefer-destructuring': ['off'], // don't care about use of destructuring
    // quotes around object props must be consistent and always used for language keywords
    'quote-props': ['error', 'consistent', { keywords: true }],
    'semi': ['error', 'never'], // never use semicolons

    // --- IMPORT RULES ---
    // never use file extension for .vue, .js, or .mjs imports; require it for everything else
    'import/extensions': ['error', 'always', { vue: 'never', js: 'never', mjs: 'never' }],
    // it's ok to use undeclared dependencies from other dependencies (e.g. consola, vuetify)
    'import/no-extraneous-dependencies': ['off'],

    // --- VUE RULES ---
    'vue/attributes-order': ['off'], // don't care about order of element attributes
    'vue/max-attributes-per-line': ['off'], // don't care about how many element attributes there are per line
    'vue/name-property-casing': ['error', 'kebab-case'], // use kebab case for naming components
    // elements with content and/or attributes must put content on new line
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
    }],
  }
}
