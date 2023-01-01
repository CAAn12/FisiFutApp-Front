import { CanchaRepositoryImpl } from '../../../data/repositories/CanchaRepository'
import { Cancha } from '../../entities/Cancha';
import * as ImagePicker from 'expo-image-picker';

const { create } = new CanchaRepositoryImpl();

export const CreateCanchaUseCase = async (cancha: Cancha, file: ImagePicker.ImagePickerAsset) => {
    return await create (cancha, file); 
}