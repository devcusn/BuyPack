import React from 'react'

import styles from './Layout.module.scss'
import { LayoutProps } from './types'
import Header from './components/Header/Header'

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
