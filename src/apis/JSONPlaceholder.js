import axios from 'axios';

const JSONPlaceholder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default JSONPlaceholder;