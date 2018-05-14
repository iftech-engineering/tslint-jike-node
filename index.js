module.exports = {
  extends: 'tslint-xo',
  rules: {
    // off
    radix: false,
    'no-import-side-effect': false,
    'no-non-null-assertion': false,
    'only-arrow-functions': false,
    'newline-before-return': false,
    'type-literal-delimiter': false,
    'no-http-string': false,
    'underscore-consistent-invocation': false,
    'await-promise': false,
    'no-redundant-jsdoc': false,
    'interface-over-type-literal': false,
    'no-string-based-set-interval': false,
    'early-exit': false,

    // on
    indent: [true, 'spaces', 2],
    semicolon: [true, 'never'],
    'max-line-length': [true, 100],
    'comment-format': [true, 'check-space'],
    'variable-name': [true, 'ban-keywords'],
    'object-curly-spacing': [true, 'always'],
    'trailing-comma': [true, {
      'multiline': {
        'objects': 'always',
        'arrays': 'always',
        'imports': 'always',
        'exports': 'always',
        'functions': 'always',
        'typeLiterals': 'never',
      },
      'esSpecCompliant': true,
    }],
    'space-before-function-paren': [true, {
      'anonymous': 'never',
      'asyncArrow': 'always',
      'named': 'never',
      'constructor': 'never',
      'method': 'never',
    }],

    // warning
    'no-parameter-reassignment': { severity: 'warning' },
    'no-unnecessary-type-assertion': { severity: 'warning' },
    'promise-function-async': { severity: 'warning' },
    'restrict-plus-operands': { severity: 'warning' },
    'no-require-imports': { severity: 'warning' },
    'no-floating-promises': { severity: 'warning' },
    'promise-must-complete': { severity: 'warning' },
  },
}
