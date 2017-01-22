"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.jsx' // your app's entry point
	],
	externals: {React: 'react'},
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
	output: {
		path: 'public',
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			// global css
			test: /\.css$/,
			exclude: /[\/\\]src[\/\\]/,
			loaders: [
				'style?sourceMap',
				'css'
			]
		}, {
			// local scss modules
			test: /\.scss$/,
			exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
			loaders: [
				'style?sourceMap',
				'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
				'postcss',
				'sass'
			]
		}, {
			// local css modules
			test: /\.css$/,
			exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
			loaders: [
				'style?sourceMap',
				'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
			]
		}, {
			//JS/JSX files
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loaders: ['react-hot-loader/webpack', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime']
		}]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, "./some-folder")]
	},
	devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: process.env.NODE_ENV === 'production' ? [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	] : [
			new webpack.NoErrorsPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html'
			}),
		]
};
