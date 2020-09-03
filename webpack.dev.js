const HtmlwebpackPlugin = require('html-webpack-plugin')
const {merge} = require('webpack-merge')
const commonConf = require('./webpack.common')
const outputFile = '[name]'
const assetFile = '[name]'

module.exports = () => merge(commonConf({outputFile, assetFile}), {
  mode : 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    contentBase: './public',
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
})
