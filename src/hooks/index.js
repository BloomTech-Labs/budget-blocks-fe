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
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios[method](url, data, config);

        setAxiosData(response.data);

      } catch (error) {
        setAxiosData(error)
        throw error;
      } finally {
        setLoading(false);

      }
    };
    fetchData();
  }, []);

  return { loading, axiosData };
}

export const useAxiosWithAuth = (url, method, data) => {
  return useAxios(url, method, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
      [`Access-Control-Allow-Origin`]: '*',
      [`Access-Control-Allow-Methods`]: 'GET,PUSH,POST,PATCH,DELETE,OPTIONS,PUT'
    }
  })
}

