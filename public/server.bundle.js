/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _webpack = __webpack_require__(4);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _routes = __webpack_require__(5);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// we'll use this to render our app to an html string
	var express = __webpack_require__(20),
	    config = __webpack_require__(21);

	// and these to match the url to routes and then render
	// require('babel-register')({
	//     ignore: /(processCss\.js|node_modules)/ // regex matching all files used by css-modules-require-hook to process your css files
	// })

	// ...
	// import some new stuff


	var firebase = __webpack_require__(23);
	var path = __webpack_require__(22);

	var compression = __webpack_require__(24);
	var app = express();

	//Enable compression
	app.use(compression());

	// var router = express.Router();

	// app.get('/', function (req, res) {
	//   res.send('Hello World2!')
	// })

	// respond with "hello world" when a GET request is made to the homepage
	// router.get('/', function(req, res) {
	// console.log('Hello World! ');
	// res.send('im the home page!');  
	// });

	// app.use('/', router);

	// serve our static stuff through the public directory
	app.use(express.static(path.join(__dirname, 'public')));

	// const compiler = webpack(config);
	// app.use(webpackMiddleware(compiler)) 

	// send all requests to index.html so browserHistory in React Router works
	app.get('*', function (req, res) {
	  serve(function (req, res) {
	    // Note that req.url here should be the full URL path from
	    // the original request, including the query string.
	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
	      if (error) {
	        res.status(500).send(error.message);
	      } else if (redirectLocation) {
	        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	      } else if (renderProps) {
	        // You can also check renderProps.components or renderProps.routes for
	        // your "not found" component or route respectively, and send a 404 as
	        // below, if you're using a catch-all route.
	        res.status(200).send(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
	        // res.status(200).send(renderToString(<RouterContext {...renderProps} />))
	      } else {
	        res.status(404).send('Not found');
	      }
	    });
	  });
	});

	// function renderPage(appHtml) {
	//   return `
	//     <!doctype html public="storage">
	//     <html>
	//     <meta charset=utf-8/>
	//     <title>My First React Router App</title>
	//     <link rel=stylesheet href=/index.css>
	//     <div id=app>${appHtml}</div>
	//     <script src="/bundle.js"></script>
	//    `
	// }

	app.listen(config.port, function () {
	  console.log('Express server listening on port ' + config.port);
	});

	module.exports = __webpack_require__(25)(app, config);

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nicholaslie/Documents/Sevva/sevva-backend/server.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nicholaslie/Documents/Sevva/sevva-backend/server.js"); } } })();
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _app = __webpack_require__(6);

	var _app2 = _interopRequireDefault(_app);

	var _About = __webpack_require__(17);

	var _About2 = _interopRequireDefault(_About);

	var _Repos = __webpack_require__(18);

	var _Repos2 = _interopRequireDefault(_Repos);

	var _Repo = __webpack_require__(19);

	var _Repo2 = _interopRequireDefault(_Repo);

	var _Home = __webpack_require__(16);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _app2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/repos', component: _Repos2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: '/repos/:userName/:repoName', component: _Repo2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
	); // routes.js

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/config/routes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/config/routes.js"); } } })();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(7);

	var _index = __webpack_require__(11);

	var _index2 = _interopRequireDefault(_index);

	var _navlink = __webpack_require__(13);

	var _navlink2 = _interopRequireDefault(_navlink);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _NavLink = __webpack_require__(15);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _Home = __webpack_require__(16);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.children || _react2.default.createElement(_Home2.default, null),
	        _react2.default.createElement(
	          'h1',
	          null,
	          'It Works!'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'This React project just works including ',
	          _react2.default.createElement(
	            'span',
	            { className: _index2.default.blueBg },
	            'module'
	          ),
	          ' local styles.'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Global bootstrap css import works too as you can see on the following button.'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            'a',
	            { className: 'btn btn-primary btn-lg' },
	            'Enjoy!'
	          )
	        ),
	        _react2.default.createElement(
	          'ul',
	          { role: 'nav' },
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              _reactRouter.IndexLink,
	              { to: '/', activeClassName: _navlink2.default.navlinkActive },
	              'Home'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              _NavLink2.default,
	              { to: '/about' },
	              'About'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              _NavLink2.default,
	              { to: '/repos' },
	              'Repos'
	            )
	          )
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/app.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/app.jsx"); } } })();

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"blueBg":"index__blueBg___2aHe3","navlinkActive":"index__navlinkActive___1yJgB"};

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"navlinkActive":"_navlink__navlinkActive___15OQd"};

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _navlink = __webpack_require__(13);

	var _navlink2 = _interopRequireDefault(_navlink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: _navlink2.default.navlinkActive }));
	  }
	});

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/components/NavLink.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/components/NavLink.js"); } } })();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Home',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      'Home'
	    );
	  }
	}); // modules/Home.js

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/components/Home.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/components/Home.js"); } } })();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'About',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      'About'
	    );
	  }
	}); // modules/About.js

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/components/About.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/components/About.js"); } } })();

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _NavLink = __webpack_require__(15);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// modules/Repos.js
	exports.default = _react2.default.createClass({
	  displayName: 'Repos',


	  // add this method
	  handleSubmit: function handleSubmit(event) {
	    event.preventDefault();
	    var userName = event.target.elements[0].value;
	    var repo = event.target.elements[1].value;
	    var path = '/repos/' + userName + '/' + repo;
	    console.log(path);
	    _reactRouter.browserHistory.push(path);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'Repos'
	      ),
	      _react2.default.createElement(
	        'ul',
	        null,
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/repos/reactjs/react-router' },
	            'React Router'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/repos/facebook/react' },
	            'React'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.handleSubmit },
	            _react2.default.createElement('input', { type: 'text', placeholder: 'userName' }),
	            ' / ',
	            ' ',
	            _react2.default.createElement('input', { type: 'text', placeholder: 'repo' }),
	            ' ',
	            _react2.default.createElement(
	              'button',
	              { type: 'submit' },
	              'Go'
	            )
	          )
	        )
	      ),
	      this.props.children
	    );
	  }
	});

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/components/Repos.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/components/Repos.js"); } } })();

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Repo',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        this.props.params.repoName
	      )
	    );
	  }
	}); // modules/Repo.js

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/components/Repo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nicholaslie/Documents/Sevva/sevva-backend/src/components/Repo.js"); } } })();

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var path = __webpack_require__(22),
	    rootPath = path.normalize(__dirname + '/..'),
	    env = process.env.NODE_ENV || 'development';

	var config = {
	  development: {
	    root: rootPath,
	    app: {
	      name: 'sevva-backend'
	    },
	    port: process.env.PORT || 3000
	  },

	  test: {
	    root: rootPath,
	    app: {
	      name: 'sevva-backend'
	    },
	    port: process.env.PORT || 3000
	  },

	  production: {
	    root: rootPath,
	    app: {
	      name: 'sevva-backend'
	    },
	    port: process.env.PORT || 3000
	  }
	};

	module.exports = config[env];

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nicholaslie/Documents/Sevva/sevva-backend/config/config.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nicholaslie/Documents/Sevva/sevva-backend/config/config.js"); } } })();
	/* WEBPACK VAR INJECTION */}.call(exports, "config"))

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("firebase");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var express = __webpack_require__(20);
	var glob = __webpack_require__(26);

	var favicon = __webpack_require__(27);
	var logger = __webpack_require__(28);
	var cookieParser = __webpack_require__(29);
	var bodyParser = __webpack_require__(30);
	var compress = __webpack_require__(24);
	var methodOverride = __webpack_require__(31);

	module.exports = function (app, config) {
	  var env = process.env.NODE_ENV || 'development';
	  app.locals.ENV = env;
	  app.locals.ENV_DEVELOPMENT = env == 'development';

	  app.set('views', config.root + '/app/views');
	  app.set('view engine', 'jade');

	  // app.use(favicon(config.root + '/public/img/favicon.ico'));
	  app.use(logger('dev'));
	  app.use(bodyParser.json());
	  app.use(bodyParser.urlencoded({
	    extended: true
	  }));
	  app.use(cookieParser());
	  app.use(compress());
	  app.use(express.static(config.root + '/public'));
	  app.use(methodOverride());

	  var controllers = glob.sync(config.root + '/app/controllers/*.js');
	  controllers.forEach(function (controller) {
	    __webpack_require__(32)(controller)(app);
	  });

	  app.use(function (req, res, next) {
	    var err = new Error('Not Found');
	    err.status = 404;
	    next(err);
	  });

	  if (app.get('env') === 'development') {
	    app.use(function (err, req, res, next) {
	      res.status(err.status || 500);
	      res.render('error', {
	        message: err.message,
	        error: err,
	        title: 'error'
	      });
	    });
	  }

	  app.use(function (err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('error', {
	      message: err.message,
	      error: {},
	      title: 'error'
	    });
	  });

	  return app;
	};

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nicholaslie/Documents/Sevva/sevva-backend/config/express.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nicholaslie/Documents/Sevva/sevva-backend/config/express.js"); } } })();

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("glob");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("method-override");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./config": 21,
		"./config.js": 21,
		"./express": 25,
		"./express.js": 25
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 32;


/***/ }
/******/ ]);