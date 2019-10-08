import axios from 'axios';

export default axios.create({
    baseURL: 'http://strainapi.evanbusse.com/pfRyeU6/',
    responseType: 'json'
});