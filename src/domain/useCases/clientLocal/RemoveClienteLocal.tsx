import { ClienteLocalRepositoryImpl } from "../../../data/repositories/ClienteLocalRepository";

const { remove } = new ClienteLocalRepositoryImpl();

export const RemoveClienteLocalUseCase = async () => {
    return await remove();
}