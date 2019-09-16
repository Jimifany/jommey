import axios from 'axios'
import { message } from 'antd';
import { getToken } from './index'
const Url = {
  '123.206.55.50': '//exam.jasonandjay.com',
  'jasonandjay.com': '//exam.jasonandjay.com',
  '127.0.0.1:3000': '//172.29.102.1:7001'
}
const instance = axios.create({
  baseURL: Url[window.location.host],
  timeout: 1000,
  headers: { 'authorization': getToken() }//给请求头添加免登陆信息
})
// 请求拦截器
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
}
);

// 响应拦截器
instance.interceptors.response.use((response: any) => {
  // Do something with response data
  if (response.status !== 200) {
    message.error(response.statusText);
  }
  return response.data;
}, (error) => {
  if (error.response.status && error.response.status !== 200) {
    message.error(error.response.statusText);
  } else {
    // message.error(error.response);
  }
  // Do something with response error
  return Promise.reject(error);
}
);

export default instance;