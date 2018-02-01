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

    // on
    indent: [true, 'spaces', 2],
    semicolon: [true, 'never'],
    'max-line-length': [true, 100],
    'comment-format': [true, 'check-space'],
    'variable-name': [true, 'ban-keywords'],
    'object-curly-spacing': [true, 'always'],
    'trailing-comma': [true, {
      "multiline": {
        "objects": "always",
        "arrays": "always",
        "imports": "always",
        "exports": "always",
        "functions": "always",
        "typeLiterals": "never",
      },
      'esSpecCompliant': true,
    }],

    // warning
    'no-parameter-reassignment': { severity: 'warning' },
    'no-unnecessary-type-assertion': { severity: 'warning' },
    'promise-function-async': { severity: 'warning' },
    'await-promise': { severity: 'warning' },
    'restrict-plus-operands': { severity: 'warning' },
    'no-require-imports': { severity: 'warning' },
    'no-redundant-jsdoc': { severity: 'warning' },
    'early-exit': { severity: 'warning' },
    'promise-must-complete': { severity: 'warning' },
  },
}
