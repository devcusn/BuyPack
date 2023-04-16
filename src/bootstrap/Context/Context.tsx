import React from 'react'
import { Provider } from 'react-redux'

import store from 'context'

import { ContextProps } from './types'

const Context: React.FunctionComponent<ContextProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default Context
