import HTTPClient from './HTTPClient'

export const Request = new HTTPClient(process.env.REACT_APP_SERVICE_URL || '')
