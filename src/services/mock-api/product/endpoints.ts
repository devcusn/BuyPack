import { Request } from 'services/_base'

import { Service } from '../types'

export const getProducts: Service<any, any> = async () => {
  return await Request.get('packages', {})
}
