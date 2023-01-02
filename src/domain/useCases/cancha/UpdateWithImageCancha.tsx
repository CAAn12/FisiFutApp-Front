import { CanchaRepositoryImpl } from '../../../data/repositories/CanchaRepository'
import { Cancha } from '../../entities/Cancha';
import * as ImagePicker from 'expo-image-picker';

const { updateWithImage } = new CanchaRepositoryImpl();

export const UpdateWithImageCanchaUseCase = async (cancha: Cancha, file: ImagePicker.ImagePickerAsset) => {
    return await updateWithImage (cancha, file); 
}