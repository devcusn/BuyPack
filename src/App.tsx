import React from 'react'

import RouterProvider from 'bootstrap/Router/RouterProvider'
import Provider from 'bootstrap/Provider'
import Guard from 'bootstrap/Guard/GuardProvider'
import Auth from 'bootstrap/Guard/AuthProvider'
import Context from 'bootstrap/Context/Context'

const App: React.FunctionComponent = () => {
  return (
    <Context>
      <Provider>
        <Guard>
          <Auth>
            <RouterProvider />
          </Auth>
        </Guard>
      </Provider>
    </Context>
  )
}

export default App
