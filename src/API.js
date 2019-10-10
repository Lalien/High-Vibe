import axios from 'axios';

export default axios.create({
    baseURL: 'https://strainapi.evanbusse.com/pfRyeU6/',
    responseType: 'json'
});