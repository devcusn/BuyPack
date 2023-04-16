import LandingPage from 'pages/Landing'
import LoginPage from 'pages/Login/LoginPage'

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
  }
]

export default Routers
