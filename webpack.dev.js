// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        historyApiFallback: true, // React Router 사용 시 필요
        hot: true,                // HMR(Hot Module Replacement) 활성화
        watchFiles: ['src/**/*.ts', 'src/**/*.tsx', 'public/index.html'],
        port: 3000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,       // 타입체크는 ForkTsChecker로 별도 처리
                            getCustomTransformers: () => ({
                                before: [require('react-refresh-typescript')()]
                            }),
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            // ...다른 로더 규칙...
        ],
        plugins: [
            new ReactRefreshWebpackPlugin(), // React Fast Refresh 플러그인 추가
            // ...다른 플러그인(예: HtmlWebpackPlugin)...
        ],
    },
    output: {
        filename: '[name].js',
    },
});
