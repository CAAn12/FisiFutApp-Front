import { CanchaRepositoryImpl } from "../../../data/repositories/CanchaRepository";

const { getAll } = new CanchaRepositoryImpl();

export const GetAllCanchaUseCase = async (idCliente: string) => {
    return await getAll(idCliente);
}