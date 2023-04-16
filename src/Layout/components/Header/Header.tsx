import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'app/assets/logo/logo.svg'

import styles from './Header.module.scss'
import { UserOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'

import { HeaderProps } from './types'

const Header: React.FunctionComponent<HeaderProps> = (props) => {
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
        {props?.userName || 'default name'}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    userName: state.userName
  }
}
export default connect(mapStateToProps)(Header)
