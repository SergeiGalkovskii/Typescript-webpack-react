const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: './index.tsx',
    devtool: "source-map",
    output: {
        path: path.resolve('dist'),
        publicPath: "/",
        filename: 'index.[hash].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.tsx?$/,
                enforce: "pre",
                loader: "tslint-loader"

            },
            {
                test: /\.tsx?$/,
                use: ["ts-loader"]
            },
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", "js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}