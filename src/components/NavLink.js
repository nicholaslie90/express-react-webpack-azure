import React from 'react'
import { Link } from 'react-router'
import styles from '../stylesheets/components/_navlink.scss'

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName={styles.navlinkActive}/>
  }
})