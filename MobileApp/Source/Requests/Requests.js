import axios from 'axios';
import url from './baseURL';

const Requests = () => axios({
  method: 'get',
  url: `http://${url.BASE_URL}:3000/api/user/fetchAllRequests`
})
  .then((response) => response.data, (error) => {
    console.log(error);
  });


export default Requests;
