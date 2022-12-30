import { AuthRepositoryImpl } from "../../../data/repositories/AuthRepository";
import { Cliente } from "../../entities/Cliente";
import * as ImagePicker from 'expo-image-picker';

const { registerWithImage } = new AuthRepositoryImpl();

export const RegisterWithImageAuthUseCase = async (cliente: Cliente, file: ImagePicker.ImagePickerAsset) => {
    return await registerWithImage(cliente, file);
}