import axios, { AxiosRequestConfig } from 'axios'
import codeMessage from './codeMessage'

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

const axiosInstance = axios.create({
  timeout: 10000
})

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('access_token')
    if (accessToken) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: accessToken ? `Bearer ${accessToken}` : ''
        }
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    if (error?.message?.includes?.('timeout')) {
      console.error('timeout')
    } else {
      console.error(
        codeMessage?.[error?.response?.status as keyof typeof codeMessage]
      )
      if (error?.response?.status === 403) console.error('403')
    }
    Promise.reject(error)
  }
)

const requestObj = {
  get: <ResponseType = unknown>(
    url: string,
    options?: AxiosRequestConfig<unknown>
  ): Promise<ResponseType> => {
    return axiosInstance.get(url, options)
  },
  delete: <ResponseType = unknown>(
    url: string,
    options?: AxiosRequestConfig<unknown>
  ): Promise<ResponseType> => {
    return axiosInstance.delete(url, options)
  },
  post: <ResponseType = unknown>(
    url: string,
    data: any,
    options?: AxiosRequestConfig<unknown>
  ): Promise<ResponseType> => {
    return axiosInstance.post(url, data, options)
  },
  put: <ResponseType = unknown>(
    url: string,
    data: any,
    options?: AxiosRequestConfig<unknown>
  ): Promise<ResponseType> => {
    return axiosInstance.put(url, data, options)
  },
  patch: <ResponseType = unknown>(
    url: string,
    data: any,
    options?: AxiosRequestConfig<unknown>
  ): Promise<ResponseType> => {
    return axiosInstance.patch(url, data, options)
  }
}

const request = <ResponseType = unknown>(
  url: string,
  options?: AxiosRequestConfig<unknown> & {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  }
): Promise<ResponseType> => {
  const method = options?.method ?? 'GET'

  if (method === 'GET') {
    return requestObj.get<ResponseType>(url, options)
  }
  if (method === 'DELETE') {
    return requestObj.delete<ResponseType>(url, options)
  }
  if (method === 'POST') {
    return requestObj.post<ResponseType>(url, options?.data, options)
  }
  if (method === 'PUT') {
    return requestObj.post<ResponseType>(url, options?.data, options)
  }
  if (method === 'PATCH') {
    return requestObj.patch<ResponseType>(url, options?.data, options)
  }

  return requestObj.get<ResponseType>(url, options)
}

export { axiosInstance, request }
