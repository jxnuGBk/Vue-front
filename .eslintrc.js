// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 语句强制分号结尾
    "semi": [1, "always"],
    //强制驼峰法命名
    "camelcase": 1,
    //函数定义时括号前面要不要有空格
    "space-before-function-paren": [0, "always"],
    //建议使用单引号
    "quotes": [1, "single"],
  }
}
