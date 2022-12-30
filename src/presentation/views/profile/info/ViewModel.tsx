import { useContext } from 'react';
import { RemoveClienteLocalUseCase } from '../../../../domain/useCases/clientLocal/RemoveClienteLocal';
import { ClienteContext } from '../../../context/ClienteContext';

const ProfileInfoViewModel = () => {

    const { cliente, removeClienteSession } = useContext(ClienteContext);
    
    return {
        removeClienteSession,
        cliente
    }
}

export default ProfileInfoViewModel;