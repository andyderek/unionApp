var path = require('path');
var webpack = require('webpack')
module.exports = {
    entry: ['webpack-dev-server/client?http://localhost:8000', "./entry.js", ],
    output: {
        path: __dirname,
        filename: "/bundle.js"
    },
    devServer: {
        inline: true,
        port: 8000
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: "babel-loader", 
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: "/node_modules/"
            }
        ]
    }
};