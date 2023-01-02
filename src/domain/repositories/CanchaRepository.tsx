import { ResponseFisiFutApp } from "../../data/sources/remote/models/ResponseFisiFutApp";
import { Cancha } from "../entities/Cancha";
import * as ImagePicker from 'expo-image-picker';

export interface CanchaRepository {
    getAll(idCliente: string): Promise<Cancha[]>;
    create(cancha: Cancha, file: ImagePicker.ImagePickerAsset): Promise<ResponseFisiFutApp>;
    remove(id: string): Promise<ResponseFisiFutApp>;
}