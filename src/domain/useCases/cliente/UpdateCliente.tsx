import { ClienteRepositoryImpl  } from "../../../data/repositories/ClienteRepository";
import { Cliente } from "../../entities/Cliente";

const { update } = new ClienteRepositoryImpl();

export const UpdateClienteUseCase = async(cliente: Cliente) => {
    return await update(cliente);
}