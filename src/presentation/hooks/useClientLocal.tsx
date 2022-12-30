import { useEffect, useState } from 'react'
import { Cliente } from '../../domain/entities/Cliente';
import { GetClienteLocalUseCase } from '../../domain/useCases/clientLocal/GetClienteLocal';

export const useClientLocal = () => {
    const [cliente, setCliente] = useState<Cliente>()

    useEffect(() => {
        getClienteSession();
    }, [])
    
    const getClienteSession = async() => {
        const cliente = GetClienteLocalUseCase();
        setCliente((await cliente));
    }

    return { 
        cliente,
        getClienteSession
    }
}