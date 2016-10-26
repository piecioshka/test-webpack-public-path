'use strict';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: 'dist',
        publicPath: 'http://127.0.0.1//////////test-webpack-public-path//////////dist//////////'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
            {
                test: /\.html/,
                exclude: /node_modules/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    }
};
