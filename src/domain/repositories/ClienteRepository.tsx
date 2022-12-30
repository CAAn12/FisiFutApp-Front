import { ResponseFisiFutApp } from "../../data/sources/remote/models/ResponseFisiFutApp";
import { Cliente } from "../entities/Cliente";
import * as ImagePicker from 'expo-image-picker';

export interface ClienteRepository {
    update(cliente: Cliente): Promise<ResponseFisiFutApp>;
    updateWithImage(cliente: Cliente, file: ImagePicker.ImagePickerAsset): Promise<ResponseFisiFutApp>;
}