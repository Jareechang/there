path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: './app/assets/js/index.jsx',
    output: {
        path: path.join(__dirname, 'public/js/'),
        filename: 'bundle.js',
        publicPath: '/js/',

    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot','babel-loader?presets[]=react,presets[]=es2015'],
                presets : ['es2015', 'react']
                
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
}
