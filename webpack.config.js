const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())

module.exports = {
  entry: './lib/index',
  output: {
    filename: 'index.js',
    path: path.resolve(appDirectory, './build'),
    library: 'react-emitter',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    react: 'react',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
