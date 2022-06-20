const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CssExtract = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/web/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    CssExtract.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    CssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png)|(jpe?g)|(gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[contenthash][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: 'src/web/app.html',
            inject:'body'
        }),
        new CssExtract({
            filename: 'style/[contenthash].css'
        })
    ]
}