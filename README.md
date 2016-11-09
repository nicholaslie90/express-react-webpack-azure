# express-react-webpack-azure

A starter project that combines Node.js + Express + Webpack that you can easily deploy to Windows Azure (Node.js Empty Web App) Web Services.

I just started learning Node.js development, and this repository may contain lots of unnecessary dependencies that you can easily remove with the following command:

```
> $ npm uninstall --save <package-name>
```

## To Run

Simply clone this repository and run

```
> $ npm install
```

## Develop Locally

To develop locally, run

```
> $ npm start
```

## Try running with production config

Execute the following command

```
> $ NODE_ENV=production npm start
```

## Understanding The Builds

To understand what's going on under the hood, I highly suggest you to look at the package.json file and look at the following lines:

```
"scripts": {
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:dev": "webpack-dev-server --inline --content-base public/ --history-api-fallback",
    "start:prod": "npm run build && node server.bundle.js",
    "build:client": "webpack",
    "build:server": "webpack --config webpack.server.config.js",
    "build": "npm run build:client && npm run build:server"
  }
```

When you run ```NODE_ENV=production npm start```, the package.json will look at the scripts node and execute start:prod. If you're just running ```npm start```, it will execute start:dev.

## Some Thoughts

This is my first and starter project on Node.js. I tried combining various tutorials into one.

I tried following these guides.

[https://azure.microsoft.com/en-us/documentation/articles/app-service-web-nodejs-get-started/](https://azure.microsoft.com/en-us/documentation/articles/app-service-web-nodejs-get-started/)

However, this tutorial only provides Node.js on Express without React. So, I tried to find some tutorials on the web and found a good starter React project on GitHub:

[https://github.com/alicoding/react-webpack-babel](https://github.com/alicoding/react-webpack-babel)

And tried to learn the navigations and routing in react-router:

[https://github.com/reactjs/react-router-tutorial/tree/master/lessons](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)

I highly recommend the above tutorial if you're starting out with React and learning about its navigation patterns.

Now, once they're all put together, how can I deploy this starter app to Azure? That's why I created this starter app to help those who're like me and wanted to deploy to Azure using the Free Tier. It's quite decent for a starter Node.js experience.

For those of you who stumble across any problems after deploying to Azure, I highly recommend FTP-ing directly to the server and check out the web.config file, to see if Kudu will pick up the correct server.js/app.js file.

## Questions? Feedbacks?

Feel free to raise any issues in GitHub.