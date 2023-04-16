import LandingPage from 'pages/Landing'
import LoginPage from 'pages/Login/LoginPage'
import ProductsPage from 'pages/Products/ProductsPage'

import { RouteType } from './types'
import PaymentPage from 'pages/Payment/PaymentPage'

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
  },
  {
    path: '/payment',
    Page: PaymentPage,
    auth: false
  }
]

export default Routers
