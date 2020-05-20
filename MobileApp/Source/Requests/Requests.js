import axios from 'axios';
import url from './baseURL';

const Requests = () => axios({
  method: 'get',
  url: `${url.BASE_URL}/api/user/fetchAllRequests`
})
  .then((response) => response.data, (error) => {
    console.log(error);
  });


export default Requests;
