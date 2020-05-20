import axios from 'axios';
import url from './baseURL';

const AcceptRequest = (requestIndex, acceptor) => axios({
  method: 'post',
  url: `${url.BASE_URL}/api/user/acceptRequest`,
  data: {
    requestIndex,
    acceptor
  }
})
  .then((response) => response.data, (error) => {
    console.log(error);
  });


export default AcceptRequest;
