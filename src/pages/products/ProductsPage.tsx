import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Divider, Typography } from 'antd'

import Layout from 'layout/Layout'
import { getProducts } from 'services/mock-api/product/endpoints'

import styles from './Products.module.scss'
import { ProductModel } from 'services/mock-api/product/types'
import ProductCard from './components/ProductCard/Product'

const { Title } = Typography

const ProductsPage: React.FunctionComponent = () => {
  const [products, setProducts] = useState<Array<ProductModel>>()
  const navigate = useNavigate()

  const getProductsHandler = async () => {
    try {
      const response = await getProducts({})
      if (response && response?.data && response.data.length > 0) {
        setProducts(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProductsHandler()
  }, [])

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
          <div className={styles.products}>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
          <Divider />
          <div style={{ display: 'flex' }}>
            <Title style={{ minWidth: 'fit-content' }} level={3}>
              Total Price : {price}
            </Title>
            <div style={{ width: '100%' }} />
            <Button
              size="large"
              type="primary"
              onClick={() => navigate('/payment')}
            >
              Go To Pay
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default ProductsPage
