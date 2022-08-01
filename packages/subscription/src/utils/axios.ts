import axios from 'axios';

const Axios = axios.create();

Axios.defaults.baseURL = "http://apidev.bflysoft.com:4000";
Axios.defaults.proxy = {host:"localhost",
                        port: 4000};

Axios.interceptors.request.use(config => {
  const header = localStorage.getItem('access-token') == null ? '' : 'bearer ' + localStorage.getItem('access-token');

  if( header != '')
    (config.headers as any).Authorization = header;

    return config;
});

Axios.interceptors.response.use(response=>{return response},
  async (error) => {
    if( error.response.status == 401){
      localStorage.removeItem('access-token');
      if( localStorage.getItem('refresh-token') == null || localStorage.getItem('refresh-token') == undefined){
        location.href = '/admin/login';
        localStorage.clear();
        return;
      }
      try{
      const originalRequest = error.config;
      const res = await Axios.post("/management/keycloak/refreshtoken", 
      { refreshToken: localStorage.getItem("refresh-token") });

      console.log("interceptor res : ",res);
      if( res ){
        localStorage.setItem('access-token',res.data["access_token"]);
        localStorage.setItem('refresh-token', res.data["refresh_token"]);
        (originalRequest.headers as any).Authorization = 'bearer ' + res.data.accessToken;
        return await Axios.request(originalRequest);
      }
      }catch(error){
        localStorage.clear();
        location.href = '/admin/login';
      }
      
      return Promise.reject(error);
    }
    else if(error.response.status != 200){
      //localStorage.clear();
      //location.href = '/admin/login';
      return Promise.reject(error);
    }
});
export default Axios;