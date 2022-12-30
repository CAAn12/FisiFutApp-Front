import axios from 'axios';

const ApiFisiFutApp = axios.create({
    baseURL: 'http://192.168.1.8:3000/api',
    headers: {
        'Content-type': 'application/json'
    }
})

const ApiFisiFutAppForImage = axios.create({
    baseURL: 'http://192.168.1.8:3000/api',
    headers: {
        'Content-type': 'multipart/form-data',
        'accept': 'application/json'
    }
})

export { ApiFisiFutApp, ApiFisiFutAppForImage }