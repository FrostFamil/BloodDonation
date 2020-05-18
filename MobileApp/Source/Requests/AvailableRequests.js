import axios from 'axios';
import url from './baseURL';

const AvailableRequests = (acceptor) => axios({
  method: 'post',
  url: `http://${url.BASE_URL}:3000/api/user/userFetchSpecificRequests`,
  data: {
    acceptor
  }
})
  .then((response) => response.data, (error) => {
    console.log(error);
  });

export default AvailableRequests;
