import { ProductModel } from 'services/mock-api/product/types'

const initialState: { products: Array<ProductModel> } = {
  products: []
}

export const productsReducer = (
  state = initialState,
  action: { payload: ProductModel; type: string }
) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] }
    default:
      return state
  }
}
