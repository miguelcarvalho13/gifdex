var path = require('path');

module.exports = {
  entry: './src/js/index3.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  externals: {
    vue: 'Vue',
    jquery: 'jQuery',
    clipboard: 'Clipboard'
  }
  ,watch:true
};