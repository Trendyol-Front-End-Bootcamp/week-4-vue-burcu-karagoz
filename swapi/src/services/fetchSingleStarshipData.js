import axios from 'axios';

export const fetchSingleStarshipData = (id) => {
    const responseData = axios
        .get(`https://swapi.dev/api/starships/${id}`)
        .then(response => { return response.data })
        .catch(error => error);

    return responseData;
}