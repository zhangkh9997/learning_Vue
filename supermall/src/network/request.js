import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance.interceptors.response.use(res => {
    return res.data
  },error => {
    console.log(error);
  })

  return instance(config)
}
