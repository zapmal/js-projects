const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
    module: {
        /*
        * To use SASS (.scss) files, we need to do the following:
        * Install sass-loader and node-sass from npm.
        * Change "test" to /\.scss$/
        * Add the sass-loader at the bottom.
        */
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" }
                ]
            }
        ]    
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html", 
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css",  
        })
    ]
}