import { useState, useContext } from 'react'
import { LoginAuthUseCase } from '../../../domain/useCases/auth/LoginAuth';
import { SaveClienteLocalUseCase } from '../../../domain/useCases/clientLocal/SaveClienteLocal';
import { ClienteContext } from '../../context/ClienteContext';
import { useClientLocal } from '../../hooks/useClientLocal';

const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const { cliente, saveClienteSession } = useContext(ClienteContext);

    console.log('Usuario de sesión: ' + JSON.stringify(cliente));

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const login = async() => {
        if (isValidForm()){
            const response = await LoginAuthUseCase(values.email, values.password);
            console.log('RESPONSE: ' + JSON.stringify(response));

            if (!response.success){
                setErrorMessage(response.message);  
            }
            else{
                saveClienteSession(response.data);
            }
        }
    }

    const isValidForm = (): boolean => {
        const regexEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if(!regexEmail.test(values.email)){
            setErrorMessage('Ingrese un correo electrónico adecuado');
            return false;
        }

        if(values.password === ''){
            setErrorMessage('Ingrese su contraseña');
        }
        
        return true;
    }

    return {
        ...values,
        cliente,
        onChange,
        login,
        errorMessage
    }
}

export default HomeViewModel;