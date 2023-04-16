import { ProductModel } from 'services/mock-api/product/types'

export const addProduct = (product: ProductModel) => {
  return {
    type: 'ADD_PRODUCT_NAME',
    payload: product
  }
}
