const path = require('path');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    {
        mode: process.env.NODE_ENV,
        entry: './src/styl/index.styl',
        plugins: [
            new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: `[name]${process.env.NODE_ENV !== 'development' ? '.min' : ''}.css`,
                chunkFilename: '[name].[id].css',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: './src/config.json',
                        to: path.resolve(__dirname, './dist'),
                    }
                ],
            })
        ],
        output: {
            path: path.resolve(__dirname, './dist/css'),
        },
        module: {
            rules: [
                {
                    test: /\.styl$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader',
                        {
                            loader: 'stylus-loader',
                            options: {
                                stylusOptions: {
                                    resolveURL: true,
                                    compress: process.env.NODE_ENV !== 'development',
                                }
                            }
                        },
                    ],
                },
            ],
        },
        devtool: 'source-map',
    },
];
