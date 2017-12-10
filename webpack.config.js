const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const configType = process.env.NODE_ENV;

var distConfig = {
	entry: {
		app: "./src/app/index.tsx",
		vendor: ["react", "react-dom"]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			},
			{
				test: /\.sass/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.ts/,
				use: 'ts-loader'
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].min.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor"),
		new ExtractTextPlugin("css/styles.min.css"),
		new HtmlWebpackPlugin({
			/* minify: {
				 collapseWhitespace: true
			 },*/
			hash: true,
			filename: 'index.html',
			template: 'src/index.html'
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
};

var devConfig = {
	devtool: 'inline-source-map',
	entry: [
		'./src/app/index.tsx'
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader", options: {
						sourceMap: true
					}
				}]
			},
			{
				test: /\.sass/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader", options: {
						sourceMap: true
					}
				}, {
					loader: "sass-loader", options: {
						sourceMap: true
					}
				}]
			},
			{
				test: /\.ts/,
				exclude: '/node_modules/',
				use: {
					loader: 'ts-loader',
					options: {
						compilerOptions: {
							"sourceMap": true,
							"inlineSources": true
						}
					}
				}
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	devServer: {
		hot: true,
		port: 8000,
		stats: "errors-only",
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};

switch (configType) {
	case 'dist':
		config = distConfig;
		break;
	default:
		config = devConfig;
}

module.exports = config;
