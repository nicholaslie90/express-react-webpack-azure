var fs = require('fs')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

  entry: path.resolve(__dirname, 'server.js'),

  output: {
    filename: 'server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
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
      loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=es2015&presets[]=react']
    }],

  },

  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}