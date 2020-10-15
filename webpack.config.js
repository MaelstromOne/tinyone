const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HTMLPlugin = require('html-webpack-plugin')

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
        rules: [{
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new HTMLPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new miniCss({
            filename: 'style.css',
        }),
    ]
};