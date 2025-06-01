// webpack.prod.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/', // 실제 운영 시 CDN 경로가 있다면 변경
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
            new CssMinimizerPlugin(),
        ],
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});
