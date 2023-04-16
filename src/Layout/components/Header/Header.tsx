import React from 'react'
import styles from './Header.module.scss'

const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>BuyPack</div>
      <div className={styles.menu}></div>
    </div>
  )
}
export default Header
