import { useState, useContext } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { SaveClienteLocalUseCase } from '../../../../domain/useCases/clientLocal/SaveClienteLocal';
import { useClientLocal } from '../../../hooks/useClientLocal';
import { UpdateClienteUseCase } from '../../../../domain/useCases/cliente/UpdateCliente';
import { UpdateWithImageClienteUseCase } from '../../../../domain/useCases/cliente/UpdateWithImageCliente';
import { Cliente } from '../../../../domain/entities/Cliente';
import { ResponseFisiFutApp } from '../../../../data/sources/remote/models/ResponseFisiFutApp';
import { ClienteContext } from '../../../context/ClienteContext';

const ProfileUpdateViewModel = (cliente: Cliente) => {
    const [values, setValues] = useState(cliente);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>() //Igual a ImageInfo
    const { getClienteSession } = useClientLocal();
    const { saveClienteSession } = useContext(ClienteContext);
 
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
    
    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const onChangeInfoUpdate = (name: string, lastname: string, phone: string) => {
        setValues({...values, name, lastname, phone})
    }

    const update = async () => {
        if (isValidForm()){
            setLoading(true);

            let response = {} as ResponseFisiFutApp; 

            if(values.image?.includes('https://')){
                response = await UpdateClienteUseCase(values);
            }
            else{
                response = await UpdateWithImageClienteUseCase(values, file!);
            }
            
            setLoading(false);
            console.log('RESULT: ' + JSON.stringify(response));

            if (response.success){
                saveClienteSession(response.data);
                setSuccessMessage(response.message);
            }
            else{
                setErrorMessage(response.message);
            }
        }
    }

    const isValidForm = (): boolean => {
        const regexEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const regexPhone: RegExp = /^\d{9}$/;

        if(values.name === ''){
            setErrorMessage('Ingrese su nombre');
            return false;
        }

        if(values.lastname === ''){
            setErrorMessage('Ingrese sus apellidos');
            return false;
        }

        if(!regexPhone.test(values.phone)){
            setErrorMessage('Ingrese un teléfono celular adecuado');
            return false;
        }

        return true;
    }

    return{
        ...values,
        onChange,
        update,
        pickImage,
        takePhoto,
        onChangeInfoUpdate,
        errorMessage,
        successMessage,
        loading,
        cliente
    }
}

export default ProfileUpdateViewModel;