'use strict';
const path = require('path');

// TODO: TSLint should improve this:
// https://github.com/palantir/tslint/issues/3436
const getRuleDirectory = (name, directory) =>
  path.join(path.dirname(require.resolve(name)), directory || '');

module.exports = {
  extends: 'tslint-xo/space',
  rules: {
    'no-import-side-effect': false,
    'no-non-null-assertion': false,
    'no-parameter-reassignment': {
      severity: 'warning',
    },
    'no-unnecessary-type-assertion': {
      severity: 'warning',
    },
    'only-arrow-functions': false,
    'promise-function-async': {
      severity: 'warning',
    },
    'await-promise': {
      severity: 'warning',
    },
    radix: false,
    'restrict-plus-operands': {
      severity: 'warning',
    },
    indent: [true, 'spaces', 2],
    'no-require-imports': {
      severity: 'warning',
    },
    'trailing-comma': [
      true,
      {
        'multiline': {
          'objects': 'always',
          'arrays': 'always',
          'functions': 'never',
          'typeLiterals': 'ignore'
        },
        'esSpecCompliant': true
      }
    ],
    'comment-format': [true, 'check-space'],
    'newline-before-return': false,
    'no-redundant-jsdoc': {
      severity: 'warning',
    },
    semicolon: [true, 'never', 'strict-bound-class-methods'],
    'type-literal-delimiter': false,
    'variable-name': [true, 'ban-keywords'],
    'object-curly-spacing': [true, 'always'],
    'early-exit': {
      severity: 'warning',
    },
    'no-http-string': false,
    'no-unnecessary-class': true,
    'promise-must-complete': {
      severity: 'warning',
    },
    'underscore-consistent-invocation': false,
  }
}
