const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpg|png|svg|ttf|woff|eot)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    publicPath: "img",
                    outputPath: 'img',
                }
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 40
                    },
                    optipng: {
                        optimizationLevel: 4
                    },
                    pngquant: {
                        quality: [0.50, 0.70],
                        speed: 8
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new miniCss({
            filename: 'style.css',
        }),
    ]
};