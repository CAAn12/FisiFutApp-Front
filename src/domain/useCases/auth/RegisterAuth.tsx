import { AuthRepositoryImpl } from "../../../data/repositories/AuthRepository";
import { Cliente } from "../../entities/Cliente";
const { register } = new AuthRepositoryImpl();

export const RegisterAuthUseCase = async (cliente: Cliente) => {
    return await register(cliente);
}