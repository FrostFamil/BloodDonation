import axios from 'axios';
import url from './baseURL';

const ProfileRequest = (userId) => axios({
  method: 'post',
  url: `${url.BASE_URL}/api/user/getUserData`,
  data: {
    userId
  }
})
  .then((response) => response.data, (error) => {
    console.log(error);
  });

export default ProfileRequest;
