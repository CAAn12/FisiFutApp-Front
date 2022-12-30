import { ClienteLocalRepositoryImpl } from "../../../data/repositories/ClienteLocalRepository";
import { Cliente } from "../../entities/Cliente";

const { save } = new ClienteLocalRepositoryImpl();

export const SaveClienteLocalUseCase = async (cliente: Cliente) => {
    return await save(cliente);
}