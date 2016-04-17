/* eslint-disable no-var, strict */
'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

/*
  start webpack-dev-server
*/
var server = new WebpackDevServer(webpack(config), {
  contentBase : config.output.contentBase,
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  noInfo: false
});

server.listen(3500, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
});
