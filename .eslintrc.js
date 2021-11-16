module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'codingitwrong',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  globals: {
    'beforeEach': true,
    'describe': true,
    'expect': true,
    'it': true,
    'sinon': true
  }
};
