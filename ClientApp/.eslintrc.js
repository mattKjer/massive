module.exports = {
    'env': {
      'browser': true,
      'jest': true,
      'es6': true,
      'node': true,
    },
    'extends': [
      'airbnb'
    ],
    'parserOptions': {
      'ecmaFeatures': {
        'jsx': true,
      }
    },
    "rules": {
      "semi": 2,
      "linebreak-style": 0,
      "no-confusing-arrow": 0,
      "implicit-arrow-linebreak": 0,
      "react/jsx-one-expression-per-line": 0
  }
}