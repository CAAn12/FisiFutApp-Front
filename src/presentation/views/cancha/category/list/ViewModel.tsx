import { useState, useContext } from 'react';
import { Cancha } from '../../../../../domain/entities/Cancha'
import { GetAllCanchaUseCase } from '../../../../../domain/useCases/cancha/GetAllCancha';
import { ClienteContext } from '../../../../context/ClienteContext';
import { DeleteCanchaUseCase } from '../../../../../domain/useCases/cancha/DeleteCancha';
import { CanchaContext } from '../../../../context/CanchaContext';

const CanchaAdminListViewModel = () => {
    const [responseMessage, setResponseMessage] = useState('');
    const { canchas, getCanchas, remove } = useContext(CanchaContext);
    const { cliente, saveClienteSession } = useContext(ClienteContext);

    const deleteCancha = async(idCancha: string) => {
        const result = await remove(idCancha);
        setResponseMessage(result.message);
    }

    return {
        canchas,
        responseMessage,
        getCanchas,
        deleteCancha
    }
}

export default CanchaAdminListViewModel;