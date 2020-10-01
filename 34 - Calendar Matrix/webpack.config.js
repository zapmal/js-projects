const path = require("path");

module.exports = {
    entry: "./src/matrix.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js" 
    },
    devServer: {
        port: 5000
    }
}