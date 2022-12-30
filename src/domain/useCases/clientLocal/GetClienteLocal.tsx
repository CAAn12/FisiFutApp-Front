import { ClienteLocalRepositoryImpl } from "../../../data/repositories/ClienteLocalRepository";

const { getCliente } = new ClienteLocalRepositoryImpl();

export const GetClienteLocalUseCase = async () => {
    return await getCliente();
}