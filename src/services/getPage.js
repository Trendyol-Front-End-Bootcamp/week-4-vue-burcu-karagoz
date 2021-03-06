import axios from 'axios';

export const getPage = (url) => {
  const responseData = axios
    .get(url)
    .then(response => { return response.data })
    .catch(error => error);

  return responseData;
}