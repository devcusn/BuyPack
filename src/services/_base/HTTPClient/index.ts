import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

export default class HTTPClient {
  private readonly axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL })
    this.axiosInstance.interceptors.request.use(
      (request: InternalAxiosRequestConfig) => {
        return request
      }
    )
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (err: AxiosError) => {
        return Promise.reject(err.response?.data)
      }
    )
  }

  async post<T, R>(
    path: string,
    data: T,
    options: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    const response = await this.axiosInstance.post(path, data, options)
    return response
  }

  async put<T, R>(
    path: string,
    data: T,
    options: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    const response = await this.axiosInstance.put(path, data, options)
    return response
  }

  async get<P, R>(path: string, params: P): Promise<AxiosResponse<R>> {
    const response = await this.axiosInstance.get(path, {
      params
    })
    return response
  }

  async delete<P, R>(path: string, params: P): Promise<AxiosResponse<R>> {
    const response = await this.axiosInstance.delete(path, { params })
    return response
  }
}
