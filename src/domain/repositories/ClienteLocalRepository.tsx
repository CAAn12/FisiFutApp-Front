import { Cliente } from "../entities/Cliente";

export interface ClienteLocalRepository {
    save(cliente: Cliente): Promise<void>;
    getCliente(): Promise<Cliente>;
    remove(): Promise<void>;
}