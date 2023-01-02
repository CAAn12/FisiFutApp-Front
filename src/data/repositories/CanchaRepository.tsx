import { Cancha } from "../../domain/entities/Cancha";
import { CanchaRepository } from "../../domain/repositories/CanchaRepository";
import { ApiFisiFutApp, ApiFisiFutAppForImage } from "../sources/remote/api/apiFisiFutApp";
import { ResponseFisiFutApp } from "../sources/remote/models/ResponseFisiFutApp";
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';
import { AxiosError } from "axios";

export class CanchaRepositoryImpl implements CanchaRepository {
    async getAll(idCliente: string): Promise<Cancha[]> {
        try{
            const response = await ApiFisiFutApp.get<Cancha[]>('/canchas/getAll/' + `${idCliente}`);
            return Promise.resolve(response.data);
        }
        catch (error){
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async create(cancha: Cancha, file: ImagePicker.ImagePickerAsset): Promise<ResponseFisiFutApp> {
        try{
            let data = new FormData();
            data.append('image', {
                // @ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop()!,
                type: mime.getType(file.uri)!
            });
            data.append('cancha', JSON.stringify(cancha));

            const response = await ApiFisiFutAppForImage.post<ResponseFisiFutApp>('/canchas/create', data);
            return Promise.resolve(response.data);
        }
        catch(error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseFisiFutApp = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async remove(id: string): Promise<ResponseFisiFutApp> {
        try{
            const response = await ApiFisiFutApp.delete<ResponseFisiFutApp>(`/canchas/delete/${id}`);
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