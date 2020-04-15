import axios from 'axios'
import { useState, useEffect } from 'react'


// /**
//  * 
//  * @param {string} url url endpoint to hit
//  * @param {string} method method of request
//  * @param {object} data data to send in post request, for example
//  * @param {object} config config obejct
//  */





export const useAxios = (url, method, data, config) => {
  const [axiosData, setAxiosData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log('**********useAxios**********', url)
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios[method](url, data, config);

        setAxiosData(response.data);
        console.log('*******************axiosData**************', axiosData)

      } catch (error) {
        console.log('*******************axiosDataError**************', error)
        setAxiosData(error)
        throw error;
      } finally {
        setLoading(false);
        console.log('*******************finally**************')

      }
    };
    fetchData();
  }, []);

  return { loading, axiosData };
}

export const useAxiosWithAuth = (url, method, data) => {
  console.log('*************useaxioswithauth*************', url, method, data)
  return useAxios(url, method, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
      [`Access-Control-Allow-Origin`]: '*',
      [`Access-Control-Allow-Methods`]: 'GET,PUSH,POST,PATCH,DELETE,OPTIONS,PUT'
    }
  })
}

