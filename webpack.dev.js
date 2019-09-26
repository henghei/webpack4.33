const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
        compress:true,
        port:1024,
        // historyApiFallback: true,
        // host:'Honey',//不能使用Honey
        hot:true
  },
  plugins:[
  new webpack.HotModuleReplacementPlugin()
  ]
});