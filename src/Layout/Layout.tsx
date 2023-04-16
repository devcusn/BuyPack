import React from 'react'

import styles from './Layout.module.scss'
import { LayoutProps } from './types'
import Header from './components/Header/Header'

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  isHeader = true
}) => {
  return (
    <div className={styles.layout}>
      {isHeader && <Header />}
      {children}
    </div>
  )
}

export default Layout
