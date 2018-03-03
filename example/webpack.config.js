const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path')

module.exports = {
  entry: `${__dirname}/index.js`,
  output: {
    path: `${__dirname}../dist`,
    filename: '[name].bundle.js',
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    alias: {
      'react-emitter': path.resolve(__dirname, '..', 'lib'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.template.html`,
      inject: 'body',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
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
