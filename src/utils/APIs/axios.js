import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL;

const api = (url = '', method, data = {}) => {
  const options = {
    method,
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
     data,
    url: `${baseURL}/${url}`,
  }
  return axios(options)
}

export default api
