import axios from 'axios';

export const fetchStarshipData = async () => {

    const responseData = axios
        .get('https://swapi.dev/api/starships/')
        .then(response => { return response.data })
        .catch(error => error);

    return responseData;
}