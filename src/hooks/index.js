import axios from 'axios'
import { useState, useEffect } from 'react'


/**
 * A custom hook that can be used directly or by other hooks to make axios calls
 * @param {string} url url endpoint to hit
 * @param {string} method method of request
 * @param {object} data data to send in post request, for example
 * @param {object} config config obejct
 */

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


/**
 * Higher order hook that uses another hook to do axios with auth
 * @param {string} url url endpoint to hit
 * @param {string} method method of request
 */
export const useAxiosWithAuth = (url, method) => {
  return useAxios(url, method, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
      [`Access-Control-Allow-Origin`]: '*',
      [`Access-Control-Allow-Methods`]: 'GET,PUSH,POST,PATCH,DELETE,OPTIONS,PUT'
    }
  })
}

