const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
        library: `micro_application_sub`,
        libraryTarget: "window"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
