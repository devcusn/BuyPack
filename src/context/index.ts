import { combineReducers, createStore } from 'redux'

import { userReducer } from './user/userReducer'
import { productsReducer } from './products/productReducer'

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer
})

const store = createStore(rootReducer)

export default store
