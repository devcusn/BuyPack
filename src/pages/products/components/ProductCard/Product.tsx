import React from 'react'

import { ProductCardProps } from './types'

import styles from './Product.module.scss'

const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  product
}) => {
  return (
    <div className={styles.productCard}>
      <img src={product.imagePath} />
      {product.name}
    </div>
  )
}
export default ProductCard
