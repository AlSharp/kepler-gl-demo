const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const DefinePlugin = require("webpack").DefinePlugin;
const path = require("path");
const os = require('os');

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: `http://${os.hostname()}:5000/`,
    path: path.join(__dirname, '..', 'backend', 'ui_build')
  },
  plugins: [
    new DefinePlugin({
      PRODUCTION: true
    })
  ]
});