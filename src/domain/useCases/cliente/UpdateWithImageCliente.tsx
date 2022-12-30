import { ClienteRepositoryImpl  } from "../../../data/repositories/ClienteRepository";
import { Cliente } from "../../entities/Cliente";
import * as ImagePicker from 'expo-image-picker';

const { updateWithImage } = new ClienteRepositoryImpl();

export const UpdateWithImageClienteUseCase = async(cliente: Cliente, file: ImagePicker.ImagePickerAsset) => {
    return await updateWithImage(cliente, file);
}