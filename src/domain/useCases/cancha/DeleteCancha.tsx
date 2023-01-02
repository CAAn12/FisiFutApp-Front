import { CanchaRepositoryImpl } from '../../../data/repositories/CanchaRepository'

const { remove } = new CanchaRepositoryImpl();

export const DeleteCanchaUseCase = async (id: string) => {
    return await remove (id); 
}