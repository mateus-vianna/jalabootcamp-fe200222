const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '/'),
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: [ "@babel/env" ] }
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [ url - loader ]
            }
        ]
    },
    resolve: { extensions: [ '*', '.js', '.jsx', 'tsx' ] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'main.js'
    },

    plugins: [ new webpack.HotModuleReplacementPlugin() ]
}