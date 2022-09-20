const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
let target= "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target= "browserslist";
}

module.exports = {
    //...
    mode: mode,
    target: target,
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i, //supports sass,scss,css files
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
};