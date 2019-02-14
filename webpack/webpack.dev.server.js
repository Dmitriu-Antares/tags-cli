const path = require("path");
const merge = require("webpack-merge");
const baseConf = require("./webpack.base.js");
var nodeExternals = require('webpack-node-externals');

const config  = {
  devtool: 'inline-source-map',
  entry: './server/server.tsx',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist')
  },
  externals: [nodeExternals()]
};

module.exports = merge(config, baseConf);
