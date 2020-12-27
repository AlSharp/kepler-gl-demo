const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const DefinePlugin = require("webpack").DefinePlugin;
const path = require("path");
const os = require('os');

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true
  },
  output: {
    publicPath: `http://${os.hostname()}:3000/`,
    path: path.join(__dirname, '..', 'backend', 'ui_build')
  },
  plugins: [
    new DefinePlugin({
      PRODUCTION: false
    })
  ]
});