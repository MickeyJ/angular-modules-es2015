var webpack = require('webpack');

var config = {
  context: __dirname +'/dev',
  entry: './index.js',
  output: {
    path: __dirname +'/dev',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        exclude: /node_modules/
      }
    ]
  }
};

if(process.env.NODE_ENV==='production')
  config.output.path=__dirname + '/public';

module.exports = config;