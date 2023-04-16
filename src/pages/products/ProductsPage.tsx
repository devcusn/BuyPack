import React from 'react'
import { Button, Card, Divider, Typography } from 'antd'

import Layout from 'Layout/Layout'

import styles from './Products.module.scss'

const { Title } = Typography

const ProductsPage: React.FunctionComponent = () => {
  const price = 10
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <Card className={styles.productList}>
          <div></div>
          <Divider />
          <div style={{ display: 'flex' }}>
            <Title style={{ minWidth: 'fit-content' }} level={3}>
              Total Price : {price}
            </Title>
            <div style={{ width: '100%' }} />
            <Button size="large" type="primary">
              Go To Pay
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default ProductsPage
