var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './dist/game1/main.js',
        './dist/game2/main.js'],
    output:{
        filename:'games/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'games',
            filename: 'games/index.html'
        })
    ]
}