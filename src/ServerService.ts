import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    timeout: 5000 // 5 seconds
});

export default httpClient;