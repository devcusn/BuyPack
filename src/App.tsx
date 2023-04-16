import React from 'react'

import RouterProvider from 'bootstrap/Router/RouterProvider'
import Provider from 'bootstrap/Provider'
import Guard from 'bootstrap/Guard/GuardProvider'
import Auth from 'bootstrap/Guard/AuthProvider'

const App: React.FunctionComponent = () => {
  return (
    <Provider>
      <Guard>
        <Auth>
          <RouterProvider />
        </Auth>
      </Guard>
    </Provider>
  )
}

export default App
