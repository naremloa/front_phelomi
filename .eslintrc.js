module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'template-curly-spacing' : 'off',
    indent : 'off'
  },
  globals:{
    CustomEase: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
