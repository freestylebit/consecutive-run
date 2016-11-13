'use strict';

const webpack = require('webpack'),
      autoprefixer = require('autoprefixer'),
      path = require('path');

let config = {
  cache: true,
  entry: {
    // Add any third party modules you'd like included on all pages.
    'vendor': [
      'react',
      'react-dom'
    ],

    // Auto-detect all components in directory.
    'html': './index.html',
    'code': './src/code.js',
  },
  output: {
    path: './dist',
    filename: 'bundle--[name].js',
  },
  resolve: {
    // NOTE: Also add the same paths near the top of the gulp file where we
    // include app-module-path.
    modulesDirectories: [
      'components',
      'helpers',
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      // Javascript: js, jsx
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      // CSS: scss, css
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass', 'postcss-loader']
      },
      // HTML: htm, html
      {
        test: /\.html?$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 12 versions'] }) ],
  plugins: [
    // Use the production version of third party libraries.
    // new webpack.DefinePlugin({
    //   'process.env':{
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // Minify assets.
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   output: {
    //     comments: false
    //   },
    //   compress: {
    //     warnings: false // https://github.com/webpack/webpack/issues/1496
    //   }
    // })
  ]
};


module.exports = config;
