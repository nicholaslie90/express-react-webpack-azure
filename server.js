// ...
// import some new stuff
import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import webpack from 'webpack'
import routes from './src/config/routes'

var express = require('express'),
  config = require('./config/config')

var firebase = require('firebase')
var path = require('path')

var compression = require('compression')
var app = express()

//Enable compression
app.use(compression())

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
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  serve((req, res) => {
    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        // You can also check renderProps.components or renderProps.routes for
        // your "not found" component or route respectively, and send a 404 as
        // below, if you're using a catch-all route.
        res.status(200).send(<RouterContext {...renderProps} />)
        // res.status(200).send(renderToString(<RouterContext {...renderProps} />))
      } else {
        res.status(404).send('Not found')
      }
    })
  })
})

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


module.exports = require('./config/express')(app, config);





