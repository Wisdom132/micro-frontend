const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {dependencies}=  require('./package.json')
module.exports = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3000,
    },
    output: {
        publicPath:'http://localhost:3000/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),

        new ModuleFederationPlugin({
            name: 'home',
            filename: 'remoteEntry.js',
            remotes: {
                components:'components@http://localhost:3001/remoteEntry.js'
            },
            shared: dependencies
        })
    ]

}