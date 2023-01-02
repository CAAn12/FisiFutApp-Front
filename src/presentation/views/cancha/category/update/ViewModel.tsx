import { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { UpdateCanchaUseCase } from '../../../../../domain/useCases/cancha/UpdateCancha';
import { UpdateWithImageCanchaUseCase } from '../../../../../domain/useCases/cancha/UpdateWithImageCancha';
import { ClienteContext } from '../../../../context/ClienteContext';
import { Cancha } from '../../../../../domain/entities/Cancha';
import { ResponseFisiFutApp } from '../../../../../data/sources/remote/models/ResponseFisiFutApp';
import { CanchaContext } from '../../../../context/CanchaContext';

const CanchaAdminUpdateViewModel = (cancha: Cancha) => {
  const [values, setValues] = useState({
    id: cancha.id,
    name: cancha.name,
    category: cancha.category,
    size: cancha.size.toString(),
    price_per_hour: cancha.price_per_hour.toString(),
    image: cancha.images.split(',')[0],
    images: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>() //Igual a ImageInfo
  const { update, updateWithImage } = useContext(CanchaContext);
  const { cliente, saveClienteSession } = useContext(ClienteContext);

  const onChange = (property: string, value: any) => {
    setValues({...values, [property]: value});
  }

  const updateCancha = async () => {
    setLoading(true);
    let response = {} as ResponseFisiFutApp;
    
    if(values.image?.includes('https://')){
      response = await update(values);
    }
    else{
      response = await updateWithImage(values, file!);
    }
    setLoading(false);
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
    updateCancha,
    cliente,
    loading,
    responseMessage
  }
}

export default CanchaAdminUpdateViewModel;