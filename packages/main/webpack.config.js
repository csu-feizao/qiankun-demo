const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
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
    ],
    devServer: {
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    optimization: {
        minimize: false
    }
};
