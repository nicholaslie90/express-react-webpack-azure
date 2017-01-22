var fs = require('fs')
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
	entry: [
		'./src/index.jsx'
	],
	// keep node_module paths out of the bundle
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server', 'react/addons',
	]).reduce(function (ext, mod) {
		ext[mod] = 'commonjs ' + mod
		return ext
	}, { React: 'react' }),
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			//local css modules
			test: /[\/\\]src[\/\\].*\.css/,
			exclude: /(node_modules|bower_components|public)/,
			loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
		}, {
			//local scss modules
			test: /[\/\\]src[\/\\].*\.scss/,
			exclude: /(node_modules|bower_components|public)/,
			loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
		}, {
			//global css files
			test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css')
		}, {
			//JS/JSX files
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loaders: ['react-hot-loader/webpack', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime']
		}]
	},
	node: {
		__filename: true,
		__dirname: true
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin('[contenthash].css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Webpack App'
		}),
		new webpack.optimize.DedupePlugin()
	]
};
