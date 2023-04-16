import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

import Layout from 'Layout/Layout'

import styles from './Layout.module.scss'

const LandingPage: React.FunctionComponent = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: 'purple'
        }}
      >
        <div className={styles.landingSection}>
          <div className={styles.landingSection_brand}></div>
          <div className={styles.landingSection_image}></div>
        </div>
        <div className={styles.landingSection}>
          <Button onClick={() => navigate('login')}>Lets Buy Pack</Button>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage
