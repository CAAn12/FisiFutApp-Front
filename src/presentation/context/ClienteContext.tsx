import React, { createContext, useState, useEffect } from 'react';
import { Cliente } from "../../domain/entities/Cliente";
import { SaveClienteLocalUseCase } from '../../domain/useCases/clientLocal/SaveClienteLocal';
import { GetClienteLocalUseCase } from '../../domain/useCases/clientLocal/GetClienteLocal';
import { RemoveClienteLocalUseCase } from '../../domain/useCases/clientLocal/RemoveClienteLocal';

export const clienteInitialState: Cliente = {
    id: '',
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
    session_token: '',
    roles: [],
}

export interface ClienteContextProps {
    cliente: Cliente;
    saveClienteSession: (cliente: Cliente) => Promise <void>;
    getClienteSession: () => Promise <void>;
    removeClienteSession: () => Promise <void>;
}

export const ClienteContext = createContext( {} as ClienteContextProps);

export const ClienteProvider = ( {children}: any ) => {
    const [cliente, setCliente] = useState(clienteInitialState);

    useEffect(() => {
        getClienteSession();
    }, [])

    const saveClienteSession = async (cliente: Cliente) => {
        await SaveClienteLocalUseCase(cliente);
        setCliente(cliente);
    }

    const getClienteSession = async () => {
        const cliente = await GetClienteLocalUseCase();
        setCliente(cliente);
    }

    const removeClienteSession = async() => {
        await RemoveClienteLocalUseCase();
        setCliente(clienteInitialState);
    }

    return (
        <ClienteContext.Provider value = {{
            cliente, 
            saveClienteSession, 
            getClienteSession, 
            removeClienteSession
        }}>
            { children }
        </ClienteContext.Provider>
    )
}