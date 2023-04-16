import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'app/assets/logo/logo.svg'

import styles from './Header.module.scss'
import { UserOutlined } from '@ant-design/icons'

const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link className={styles.logo} to="/">
          <img src={Logo} />
        </Link>
      </div>
      <div style={{ width: '100%' }}></div>
      <div className={styles.menu}>
        <UserOutlined />
        hello{' '}
      </div>
    </div>
  )
}
export default Header
