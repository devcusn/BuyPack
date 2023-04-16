import { createStore } from 'redux'
import { producReducer } from './productReducer'

const store = createStore(producReducer)

export default store
