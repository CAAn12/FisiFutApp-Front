import { AxiosError } from "axios";
import { ImagePickerAsset } from "expo-image-picker";
import mime from "mime";
import { Cliente } from "../../domain/entities/Cliente";
import { ClienteRepository } from "../../domain/repositories/ClienteRepository";
import { ApiFisiFutApp, ApiFisiFutAppForImage } from "../sources/remote/api/apiFisiFutApp";
import { ResponseFisiFutApp } from "../sources/remote/models/ResponseFisiFutApp";

export class ClienteRepositoryImpl implements ClienteRepository{
    async update(cliente: Cliente): Promise<ResponseFisiFutApp> {
        try{
            const response = await ApiFisiFutApp.put<ResponseFisiFutApp>('/clientes/updateWithoutImage', cliente);
            return Promise.resolve(response.data);
        }
        catch(error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseFisiFutApp = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async updateWithImage(cliente: Cliente, file: ImagePickerAsset): Promise<ResponseFisiFutApp> {
        try{
            let data = new FormData();
            data.append('image', {
                // @ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop()!,
                type: mime.getType(file.uri)!
            });
            data.append('cliente', JSON.stringify(cliente));

            const response = await ApiFisiFutAppForImage.put<ResponseFisiFutApp>('/clientes/update', data);
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