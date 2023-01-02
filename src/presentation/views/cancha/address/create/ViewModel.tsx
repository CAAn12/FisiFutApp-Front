import { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CreateCanchaUseCase } from '../../../../../domain/useCases/cancha/CreateCancha';
import { ClienteContext } from '../../../../context/ClienteContext';
import { CanchaContext } from '../../../../context/CanchaContext';

const CanchaAddressCreateViewModel = () => {
    const [values, setValues] = useState({
        address: '',
        district: '',
        refPoint: ''
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>() //Igual a ImageInfo
    const { create} = useContext(CanchaContext);
    const { cliente, saveClienteSession } = useContext(ClienteContext);

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const createCancha = async (clienteId: string) => {
      setLoading(true);
      const response = await create({ ...values, id_gestor: clienteId } as any, file!);
      setLoading(false);
      setResponseMessage(response.message);
      resetForm();
    } 

    const resetForm = async () => {

    }

    return {
        ...values,
        onChange,
        createCancha,
        cliente,
        loading,
        responseMessage
    }
}

export default CanchaAddressCreateViewModel;