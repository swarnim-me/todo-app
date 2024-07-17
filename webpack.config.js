const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		clean: true,
	},
	devtool: "source-map",
	devServer: {
		// static: "./dist",
		static: {
			directory: path.resolve(__dirname, "./src/assets"),
			publicPath: "/assets",
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: "body",
			scriptLoading: "defer",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/[hash][ext][query]",
				}, // To use the image file in html files
			},
		],
	},
};
