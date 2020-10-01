const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/matrix.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js" 
    },
    devServer: {
        port: 5000
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}