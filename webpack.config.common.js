var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entery: './src/app/main.ts',
    resolve: {
        extensions: ['.js', '.ts']
    },
    modules: {
        rules: [
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.css$/,
                loaders: ['raw-loader']
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}