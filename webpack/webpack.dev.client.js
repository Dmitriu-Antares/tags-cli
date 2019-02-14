const path = require("path");
const merge = require("webpack-merge");
const baseConf = require("./webpack.base.js");
const webpack = require('webpack')

const config  = {
  entry: './client/index.tsx',
  devtool: 'source-map',
  output: {
    filename: 'client.js',
    path: path.join(__dirname, '../dist')
  },
};

module.exports = merge(config, baseConf);
