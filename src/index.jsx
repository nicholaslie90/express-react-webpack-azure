import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app.jsx'
import { Router, browserHistory } from 'react-router'
import routes from './config/routes'

var ReactDom = require('react-dom');

ReactDom.render(
  //Use react-router to display the component.
  <Router routes={routes} history={browserHistory} />, document.querySelector("#app")
);

if (module.hot) {
      module.hot.accept('./app.jsx', () => {
        const App = require('./app.jsx').default;
        render(
          <AppContainer>
            <App />
          </AppContainer>,
          document.querySelector("#app")
        );
      });
    }
// </script>
