import axios from 'axios';

const Axios = axios.create();

Axios.defaults.baseURL = 'http://apidev.bflysoft.com:4000';
Axios.defaults.proxy = { host: 'localhost', port: 4000 };

Axios.interceptors.request.use(config => {
  const header = (localStorage.getItem('access-token') == null ||
                localStorage.getItem('access-token') == "undefined") ? 
                '' : `bearer ${  localStorage.getItem('access-token')}`;
  
  if (header !== '') {(config.headers as any).Authorization = header;}

  return config;
});

Axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status == 401) {
      localStorage.removeItem('access-token');
      try {
        if( localStorage.getItem('refresh-token') == null ||
        localStorage.getItem('refresh-token') == "undefined"){
          localStorage.clear();
          location.href = '/admin/login';
          return;
        }
        const originalRequest = error.config;
        const res = await Axios.post('/management/keycloak/refreshtoken', {
          refreshToken: localStorage.getItem('refresh-token')
        });

        console.log('interceptor res : ', res);
        if (res) {
          localStorage.setItem('access-token', res.data.access_token);
          localStorage.setItem('refresh-token', res.data.refresh_token);
          (originalRequest.headers as any).Authorization = `bearer ${  res.data.accessToken}`;
          return await Axios.request(originalRequest);
        }
      } catch (error) {
        localStorage.clear();
      }

      return Promise.reject(error);
    }
    else if(error.config.url === '/management/keycloak/refreshtoken'){
      localStorage.clear();
      location.href = '/admin/login';
      return Promise.reject(error);
    }else{
      return Promise.reject(error);
    }
});
export default Axios;
