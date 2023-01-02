import { useState, useContext } from 'react';
import { Cancha } from '../../../../../domain/entities/Cancha'
import { GetAllCanchaUseCase } from '../../../../../domain/useCases/cancha/GetAllCancha';
import { ClienteContext } from '../../../../context/ClienteContext';
import { DeleteCanchaUseCase } from '../../../../../domain/useCases/cancha/DeleteCancha';

const CanchaAdminListViewModel = () => {
    const [canchas, setCanchas] = useState<Cancha[]>([]);
    const [responseMessage, setResponseMessage] = useState(''); 

    const { cliente, saveClienteSession } = useContext(ClienteContext);
    
    const getCanchas = async() => {
        const result = await GetAllCanchaUseCase(JSON.stringify(cliente.id));
        setCanchas(result);
    }

    const deleteCancha = async(idCancha: string) => {
        const result = await DeleteCanchaUseCase(idCancha);
        setResponseMessage(result.message);
        if (result.success){
            getCanchas();
        }
    }

    return {
        canchas,
        responseMessage,
        getCanchas,
        deleteCancha
    }
}

export default CanchaAdminListViewModel;