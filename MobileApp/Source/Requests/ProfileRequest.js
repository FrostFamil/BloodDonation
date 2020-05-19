import axios from 'axios';
import url from './baseURL';

const ProfileRequest = (userId) => axios({
  method: 'post',
  url: `http://${url.BASE_URL}:3000/api/user/getUserData`,
  data: {
    userId
  }
})
  .then((response) => response.data, (error) => {
    console.log(error);
  });

export default ProfileRequest;
