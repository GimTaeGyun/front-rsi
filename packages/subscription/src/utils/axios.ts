import Axios from 'axios';

const axios = Axios.create();

axios.defaults.baseURL = 'http://apidev.bflysoft.com:4000';
axios.defaults.proxy = { host: 'localhost', port: 4000 };

// 자꾸 루프를 돌아서 interceptor를 조작하지않은 axios를 리프레시 토큰에 이용
Axios.defaults.baseURL = 'http://apidev.bflysoft.com:4000';
Axios.defaults.proxy = { host: 'localhost', port: 4000 };



axios.interceptors.request.use(config => {
  if (localStorage.getItem('access-token') != null ){
    const header = `bearer ${  localStorage.getItem('access-token')}`;
    (config.headers as any).Authorization = header;
  }else{
    delete (config.headers as any).Authorization;
  }
  return config;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status == 401) {
      try {
        const originalRequest = error.config;
        localStorage.removeItem('access-token');
        const res = await Axios.post('/management/keycloak/refreshtoken', {
          refreshToken: localStorage.getItem('refresh-token')
        });

        if (res.data.access_token) {
          localStorage.setItem('access-token', res.data.access_token);
          localStorage.setItem('refresh-token', res.data.refresh_token);
          (originalRequest.headers as any).Authorization = `bearer ${  res.data.accessToken}`;
          return await axios.request(originalRequest);
        }else{
          localStorage.clear();
          console.log(2);
          location.href = '/admin/login';
          return;
        }
      } catch (error) {
        localStorage.clear();
        console.log(error);
        console.log(3);
        location.href = '/admin/login';
        return;
      }
    }else{
      console.log(4);
      console.log(error);
      return Promise.reject(error);
    }
});
export {Axios, axios};
