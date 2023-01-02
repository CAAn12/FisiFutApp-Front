import { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CreateCanchaUseCase } from '../../../../../domain/useCases/cancha/CreateCancha';
import { ClienteContext } from '../../../../context/ClienteContext';
import { CanchaContext } from '../../../../context/CanchaContext';

const CanchaAdminCreateViewModel = () => {
    const [values, setValues] = useState({
        name: '',
        category: '',
        size: '',
        price_per_hour: '',
        images: '',
        image: ''
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

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All, 
          allowsEditing: true,
          quality: 1
        });
      
        if (!result.canceled) { //igual a result.cancelled
          onChange('image', result.assets[0].uri); //igual a result.uri
          setFile(result.assets[0]);
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All, 
          allowsEditing: true,
          quality: 1
        });
      
        if (!result.canceled) { //igual a result.cancelled
          onChange('image', result.assets[0].uri); //igual a result.uri
          setFile(result.assets[0]);
        }
    };

    const resetForm = async () => {
      setValues({
        name: '',
        category: '',
        size: '',
        price_per_hour: '',
        images: '',
        image: ''
      })
    }

    return {
        ...values,
        onChange,
        takePhoto,
        pickImage,
        createCancha,
        cliente,
        loading,
        responseMessage
    }
}

export default CanchaAdminCreateViewModel;