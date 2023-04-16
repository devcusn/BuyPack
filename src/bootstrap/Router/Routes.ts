import LandingPage from 'pages/Landing'
import LoginPage from 'pages/Login/LoginPage'
import ProductsPage from 'pages/products/ProductsPage'

import { RouteType } from './types'

const Routers: Array<RouteType> = [
  {
    path: '/',
    Page: LandingPage,
    auth: false
  },
  {
    path: '/login',
    Page: LoginPage,
    auth: false
  },
  {
    path: '/products',
    Page: ProductsPage,
    auth: false
  }
]

export default Routers
