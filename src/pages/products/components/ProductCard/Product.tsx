import React from 'react'
import { Divider, Typography } from 'antd'
import { ProductCardProps } from './types'

import styles from './Product.module.scss'
const { Title } = Typography
const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  product
}) => {
  return (
    <div className={styles.productCard}>
      <img src={product.imagePath} />
      <div className={styles.productCardContent}>
        <div style={{ display: 'flex' }}>
          <Title style={{ width: '100%' }} level={5}>
            {product.name}
          </Title>
          <span>{product.amount}</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', height: '100%' }}>
          {product.details.map((detail) => (
            <span key={Math.random()}>{detail}</span>
          ))}
        </div>
        <Divider />
        <div style={{ display: 'flex', gap: '8px' }}>
          {product.tags.map((tag) => (
            <span key={Math.random()}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProductCard
