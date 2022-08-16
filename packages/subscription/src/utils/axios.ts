import axios from 'axios';

const Axios = axios.create();

Axios.defaults.baseURL = 'http://apidev.bflysoft.com:4000';
Axios.defaults.proxy = { host: 'localhost', port: 4000 };

Axios.interceptors.request.use(config => {
  if( config.url?.includes('/management/keycloak/refreshtoken') ){
    delete (config.headers as any).Authorization;
  }else if (localStorage.getItem('access-token') != null ){
    const header = `bearer ${  localStorage.getItem('access-token')}`;
    (config.headers as any).Authorization = header;
  }else{
    delete (config.headers as any).Authorization;
  }
  return config;
});

Axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status == 401) {
      try {
        if( error.url?.includes('/management/keycloak/refreshtoken') ){
          localStorage.clear();
          console.log(1);
          location.href = '/admin/login';
          return;
        }
        
        const originalRequest = error.config;
        const res = await Axios.post('/management/keycloak/refreshtoken', {
          refreshToken: localStorage.getItem('refresh-token')
        });

        if (res.data.access_token) {
          localStorage.setItem('access-token', res.data.access_token);
          localStorage.setItem('refresh-token', res.data.refresh_token);
          (originalRequest.headers as any).Authorization = `bearer ${  res.data.accessToken}`;
          return await Axios.request(originalRequest);
        }else{
          localStorage.clear();
          console.log(2);
          location.href = '/admin/login';
          return;
        }
      } catch (error) {
        localStorage.clear();
        console.log(3);
        location.href = '/admin/login';
        return;
      }
    }
    else if(error.config.url === '/management/keycloak/refreshtoken'){
      localStorage.clear();
      location.href = '/admin/login';
      console.log(4);
      return Promise.reject(error);
    }else{
      return Promise.reject(error);
    }
});
export default Axios;
