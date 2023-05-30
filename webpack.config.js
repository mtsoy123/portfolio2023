const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

const copyPaterns = [
    {
        from: "./src/assets",
        to: path.resolve(__dirname, "./dist/assets"),
    },
    {
        from: "./src/favicon.ico",
        to: path.resolve(__dirname, "./dist"),
    },
    {
        from: "*.html",
        to: path.resolve(__dirname, "./dist"),
        context: "./src/",
    },
];

module.exports = {
    mode: "development",
    entry: ["./src/scss/index.scss", "./src/js/script.js"],
    output: {
        filename: "js/script.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["autoprefixer"],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
        new StylelintPlugin({
            configFile: ".stylelintrc.json",
        }),
        new CopyPlugin({
            patterns: copyPaterns,
        }),
    ],
};
