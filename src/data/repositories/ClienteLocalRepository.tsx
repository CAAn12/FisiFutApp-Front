import { ClienteLocalRepository } from '../../domain/repositories/ClienteLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';
import { Cliente } from '../../domain/entities/Cliente';

export class ClienteLocalRepositoryImpl implements ClienteLocalRepository{
    async save(cliente: Cliente): Promise<void> {
        const { save } = LocalStorage();
        await save('cliente', JSON.stringify(cliente));
    }

    async getCliente(): Promise<Cliente> {
        const { getItem } = LocalStorage();
        const data = await getItem('cliente');
        const cliente: Cliente = JSON.parse(data as any);
        return cliente;
    }

    async remove(): Promise<void> {
        const { remove } = LocalStorage();
        await remove('cliente');
    }
}