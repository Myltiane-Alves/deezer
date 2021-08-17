import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api.deezer.com/chart',
    timeout: 2000,
    headers: {'X-custom-Header': 'foobar'}
});

export {api}