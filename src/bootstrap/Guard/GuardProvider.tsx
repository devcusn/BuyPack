import React from 'react'

import { GuardProviderProps } from './types'

const Guard: React.FunctionComponent<GuardProviderProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Guard
