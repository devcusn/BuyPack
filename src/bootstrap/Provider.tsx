import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, Slide } from 'react-toastify'

import { ProviderProps } from './types'

const Provider: React.FunctionComponent<ProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </BrowserRouter>
  )
}

export default Provider
