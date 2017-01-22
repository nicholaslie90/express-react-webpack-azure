import styles from './stylesheets/index.scss'
import navlinkStyles from './stylesheets/components/_navlink.scss'
import React from 'react'
import { IndexLink } from 'react-router'
import Navigation from './components/Navigation'
import NavLink from './components/NavLink'
import Home from './components/Home'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          {this.props.children || <Home />}
          <h1>It Works!</h1>
          <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
          <p>Global bootstrap css import works too as you can see on the following button.</p>
          <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
          <ul role="nav">
            <li><IndexLink to="/" activeClassName={navlinkStyles.navlinkActive}>Home</IndexLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
          </ul>

          {/* add this */}
          {this.props.children}
        </div>
      </div>
    )
  }
}
