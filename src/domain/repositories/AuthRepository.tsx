import { ResponseFisiFutApp } from "../../data/sources/remote/models/ResponseFisiFutApp";
import { Cliente } from "../entities/Cliente";
import * as ImagePicker from 'expo-image-picker';

export interface AuthRepository {
    login(email: string, password: string): Promise<ResponseFisiFutApp>
    register(cliente: Cliente): Promise<ResponseFisiFutApp>
    registerWithImage(cliente: Cliente, file: ImagePicker.ImagePickerAsset): Promise<ResponseFisiFutApp>
}