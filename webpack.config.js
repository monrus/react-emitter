const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())

module.exports = {
  entry: './lib/index',
  output: {
    filename: 'index.js',
    path: path.resolve(appDirectory, './build'),
    library: 'react-emitter',
    libraryTarget: 'commonjs2',
  },
  // externals: {
  //   react: 'react',
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
