import axios from 'axios';
import url from './baseURL';

const AcceptRequest = (requestIndex, acceptor) => axios({
  method: 'post',
  url: `http://${url.BASE_URL}:3000/api/user/acceptRequest`,
  data: {
    requestIndex,
    acceptor
  }
})
  .then((response) => response.data, (error) => {
    console.log(error);
  });


export default AcceptRequest;
