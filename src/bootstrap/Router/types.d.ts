import React from 'react'

export type RouteType = {
  path: string
  Page: React.FunctionComponent
  auth: boolean
}
