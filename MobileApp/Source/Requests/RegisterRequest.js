import axios from 'axios';
import url from './baseURL';

const RegisterRequest = (firstName, lastName, email, password) => axios({
  method: 'post',
  url: `http://${url.BASE_URL}:3000/api/user/register`,
  data: {
    first_name: firstName,
    last_name: lastName,
    email,
    password
  }
})
  .then((response) => response.data, (error) => {
    console.log(error);
  });

export default RegisterRequest;
