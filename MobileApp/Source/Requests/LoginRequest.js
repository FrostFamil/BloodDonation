import axios from 'axios';
import url from './baseURL';

const LoginRequest = (email, password) => axios({
  method: 'post',
  url: `${url.BASE_URL}/api/user/login`,
  data: {
    email,
    password
  }
})
  .then((response) => response.data, (error) => {
    console.log(error);
  });

export default LoginRequest;
