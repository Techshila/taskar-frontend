import API_ENDPOINTS from '@/services/apiEndpoints';
import { _LOGIN_DATA } from '@/types';
import queryString from 'query-string';
import type { AxiosResponse } from 'axios';
import { basicAxios } from '@/services/basicAxios';
import axios from 'axios';
export async function signup(userData: {
  firstname:string;
  lastname:string;
  username : string;
  email: string;
password: string;
phoneNumber : Number ;


}) 

// {
//   axios({
//     method: "post",
//     url: "http://localhost:4000/api/v1/user/registerUser",

//     data: { userData },
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       //handle success
//       console.log(response);
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//     });
// }


{
  axios.post('/submit-form', queryString.stringify(userData), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}