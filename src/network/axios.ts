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
      console.log('timeout')
    } else {
      console.log(
        codeMessage?.[error?.response?.status as keyof typeof codeMessage] ??
          'error'
      )
      if (error?.response?.status === 403) console.log('403')
    }
    Promise.reject(error)
  }
)

const request = <ResponseType = unknown>(
  url: string,
  options?: AxiosRequestConfig<unknown>
): Promise<ResponseType> => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      ...options
    })
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((err) => reject(err))
  })
}

export { axiosInstance, request }
