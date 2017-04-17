const path = require('path');
const webpack = require('webpack');


const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const jsFileName = 'bundle.js';

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    path.join(__dirname, '/app.js'),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /vendor/,
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react'],
        },
      },
      {
        test: /\.css$/, loader: 'style-loader!css-loader',
      },
    ],
  },
  output: {
    filename: jsFileName,
    path: path.join(__dirname, '/build'),
  },
  plugins: [
    HTMLWebpackPluginConfig,
    WebpackMd5Hash,
  ],
  devServer: {
    historyApiFallback: true,
  }

};
