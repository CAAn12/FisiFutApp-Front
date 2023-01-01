import { ResponseFisiFutApp } from "../../data/sources/remote/models/ResponseFisiFutApp";
import { Cancha } from "../entities/Cancha";
import * as ImagePicker from 'expo-image-picker';

export interface CanchaRepository {
    create(cancha: Cancha, file: ImagePicker.ImagePickerAsset): Promise<ResponseFisiFutApp>;
}