const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    }
}