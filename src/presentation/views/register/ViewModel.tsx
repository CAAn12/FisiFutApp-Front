import { useState } from 'react'
import { RegisterWithImageAuthUseCase } from '../../../domain/useCases/auth/RegisterWithImageAuth';
import * as ImagePicker from 'expo-image-picker';
import { SaveClienteLocalUseCase } from '../../../domain/useCases/clientLocal/SaveClienteLocal';
import { useClientLocal } from '../../hooks/useClientLocal';

const RegisterViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const [values, setValues] = useState({
        name: '', lastname: '', phone: '', email: '', 
        image: '', password: '', confirmPassword: ''
    });

    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>() //Igual a ImageInfo
    const { cliente, getClienteSession } = useClientLocal();

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

    const register = async () => {
        if (isValidForm()){
            setLoading(true);
            const response = await RegisterWithImageAuthUseCase(values, file!);
            setLoading(false);
            console.log('RESULT: ' + JSON.stringify(response));
            if (response.success){
                await SaveClienteLocalUseCase(response.data);
                getClienteSession();
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

        if(!regexEmail.test(values.email)){
            setErrorMessage('Ingrese un correo electrónico adecuado');
            return false;
        }

        if(values.password === ''){
            setErrorMessage('Ingrese su contraseña');
            return false;
        }

        if(values.confirmPassword === ''){
            setErrorMessage('Confirme su contraseña');
            return false;
        }

        if(values.password !== values.confirmPassword){
            setErrorMessage('Las contraseñas deben coincidir');
            return false;
        }

        if(values.image === ''){
            setErrorMessage('Seleccione una imagen');
            return false;
        }

        return true;
    }

    return{
        ...values,
        onChange,
        register,
        pickImage,
        takePhoto,
        errorMessage,
        loading,
        cliente
    }
}

export default RegisterViewModel;