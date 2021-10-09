const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3001,
    },
    output: {
        publicPath: 'http://localhost:3001/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),

        new ModuleFederationPlugin({
            name: 'components',
            filename: 'remoteEntry.js',
            exposes: {
               './Button': './src/Button.js'
            },

            shared: ['lit-element', 'html', {
                '@material/mwc-button': {singleton: true}
            }]
        })
    ]

}