// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        historyApiFallback: true, // React Router 사용 시 필요
        hot: true,                // HMR(Hot Module Replacement) 활성화
        port: 3000,
        open: true,
    },
    module: {
        rules: [
            // 필요 시 개발 전용 로더 추가 가능 (예: ESLint 검사)
        ],
    },
    output: {
        filename: '[name].js',
    },
});
