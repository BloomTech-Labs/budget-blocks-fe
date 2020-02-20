import axios from "axios";

export const axiosWithAuth = () =>{
    return axios.create({
        headers: {
          Authorization: `${sessionStorage.getItem("token")}`,
          [`Access-Control-Allow-Origin`]: '*',
          [`Access-Control-Allow-Methods`]: 'GET,PUSH,POST,PATCH,DELETE,OPTIONS,PUT'
        }
      });
}