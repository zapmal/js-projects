const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./assets/scripts/app.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js" 
    },

    devServer: {
        port: 5000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html", 
        })
    ]
}