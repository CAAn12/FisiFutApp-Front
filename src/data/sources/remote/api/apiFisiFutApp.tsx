import axios from 'axios';
import { Cliente } from '../../../../domain/entities/Cliente';
import { LocalStorage } from '../../local/LocalStorage';

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

ApiFisiFutApp.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('cliente');
        if (data){
            const cliente: Cliente = JSON.parse(data as any);
            config.headers!['Authorization'] = cliente?.session_token!
        }
        return config;
    }
)

ApiFisiFutAppForImage.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('cliente');
        if (data){
            const cliente: Cliente = JSON.parse(data as any);
            config.headers!['Authorization'] = cliente?.session_token!
        }
        return config;
    }
)

export { ApiFisiFutApp, ApiFisiFutAppForImage }