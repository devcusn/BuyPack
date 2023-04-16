import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link className={styles.logo} to="/">
          BuyPack
        </Link>
      </div>
      <div style={{ width: '100%' }}></div>
      <div className={styles.menu}>
        <Link className={styles.link} to="/login">
          Login
        </Link>
      </div>
    </div>
  )
}
export default Header
