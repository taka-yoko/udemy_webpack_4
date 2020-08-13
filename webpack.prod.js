const HtmlwebpackPlugin = require('html-webpack-plugin')
const {merge} = require('webpack-merge')
const commonConf = require('./webpack.common')
const outputFile = '[name].[chunkhash]'
const assetFile = '[contenthash]'

module.exports = () => merge(commonConf({outputFile, assetFile}), {
  mode : 'production',
  devtool: 'none',
  plugins: [
    new HtmlwebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
})
