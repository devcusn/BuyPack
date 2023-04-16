import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'

import Layout from 'Layout/Layout'
import EshopImg from 'app/assets/images/illustration.jpg'

import styles from './Layout.module.scss'
const { Title } = Typography

const LandingPage: React.FunctionComponent = () => {
  const navigate = useNavigate()

  return (
    <Layout isHeader={false}>
      <div className={styles.brand}>
        <div className={styles.landingSection}>
          <div className={styles.landingSection_brand}>
            <Title level={3}>
              Welcome to our cutting-edge e-commerce platform, where you can
              shop the latest trends, browse a wide range of products, and
              experience seamless online shopping from the comfort of your own
              home
            </Title>
            <Button
              className={styles.getStartedButton}
              onClick={() => navigate('login')}
            >
              Lets Buy Pack
            </Button>
          </div>
          <div className={styles.landingSection_image}>
            <img src={EshopImg} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage
