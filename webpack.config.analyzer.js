const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(commonConfig, { plugins: [new BundleAnalyzerPlugin()] })
