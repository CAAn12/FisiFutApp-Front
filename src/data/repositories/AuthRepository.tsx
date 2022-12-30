import { AxiosError } from 'axios'; 
import { ImagePickerAsset } from 'expo-image-picker';
import { Cliente } from "../../domain/entities/Cliente";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { ApiFisiFutApp, ApiFisiFutAppForImage } from "../sources/remote/api/apiFisiFutApp";
import { ResponseFisiFutApp } from '../sources/remote/models/ResponseFisiFutApp';
import mime from 'mime';

export class AuthRepositoryImpl implements AuthRepository {
    async login (email: string, password: string): Promise<ResponseFisiFutApp> {
        try{
            const response = await ApiFisiFutApp.post<ResponseFisiFutApp>('/clientes/login', {
                email: email, password: password
            });
            return Promise.resolve(response.data);
        }
        catch(error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseFisiFutApp = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }    

    async register (cliente: Cliente): Promise<ResponseFisiFutApp> {
        try{
            const response = await ApiFisiFutApp.post<ResponseFisiFutApp>('/clientes/create', cliente);
            return Promise.resolve(response.data);
        }
        catch(error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseFisiFutApp = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async registerWithImage(cliente: Cliente, file: ImagePickerAsset): Promise<ResponseFisiFutApp> {
        try{
            let data = new FormData();
            data.append('image', {
                // @ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop()!,
                type: mime.getType(file.uri)!
            });
            data.append('cliente', JSON.stringify(cliente));

            const response = await ApiFisiFutAppForImage.post<ResponseFisiFutApp>('/clientes/createWithImage', data);
            return Promise.resolve(response.data);
        }
        catch(error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseFisiFutApp = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}