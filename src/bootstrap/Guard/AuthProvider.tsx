import React from 'react'

import { AuthProviderProps } from './types'

const Auth: React.FunctionComponent<AuthProviderProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Auth
