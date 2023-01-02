import { CanchaRepositoryImpl } from '../../../data/repositories/CanchaRepository'
import { Cancha } from '../../entities/Cancha';

const { update } = new CanchaRepositoryImpl();

export const UpdateCanchaUseCase = async (cancha: Cancha) => {
    return await update (cancha); 
}