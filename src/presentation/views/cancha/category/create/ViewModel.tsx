import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CreateCanchaUseCase } from '../../../../../domain/useCases/cancha/CreateCancha';

const CanchaAdminCreateViewModel = () => {
    const [values, setValues] = useState({
        name: '',
        category: '',
        size: '',
        price_per_hour: '',
        id_gestor: '',
        image: ''
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>() //Igual a ImageInfo

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const createCancha = async () => {
      const response = await CreateCanchaUseCase(values as any, file!);
      setResponseMessage(response.message);
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

    return {
        ...values,
        onChange,
        takePhoto,
        pickImage,
        createCancha,
        loading,
        responseMessage
    }
}

export default CanchaAdminCreateViewModel;