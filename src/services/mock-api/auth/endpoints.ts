import { Request } from 'services/_base'

import { AuthResponse, UserAuthParams } from './types'
import { Service } from '../types'

export const auth: Service<UserAuthParams, AuthResponse> = async (params) => {
  console.log(params)
  return await Request.post('signup', params, {})
}
