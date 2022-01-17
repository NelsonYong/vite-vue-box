import axios, { AxiosRequestConfig } from 'axios';
// import { routers } from '../routers';

//post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//设置超时
// axios.defaults.timeout = 10_000;

const axiosInstance = axios.create({
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('access_token');
    if (accessToken) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error?.message?.includes?.('timeout')) {
      // Toast.fail('请求超时');
    } else {
      // Toast.fail('网络错误，请重试');
      // routers.push('/403');
      console.log('跳转');
    }
    Promise.reject(error);
  },
);

const request = <ResponseType = unknown>(
  url: string,
  options?: AxiosRequestConfig<unknown>,
): Promise<ResponseType> => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      ...options,
    })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => reject(err));
  });
};

export { axiosInstance, request };
