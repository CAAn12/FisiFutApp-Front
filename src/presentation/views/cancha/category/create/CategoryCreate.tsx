import React, { useState, useEffect } from 'react'
import { Alert, ActivityIndicator, Image, Pressable, ScrollView, ToastAndroid, View } from 'react-native'
import { CustomTextInput } from '../../../../components/CustomTextInput';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import { RoundedButton } from '../../../../components/RoundedButton';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import styles from './Styles'
import useViewModel from './ViewModel';

export const CanchaAdminCreateScreen = () => {
    const { name, category, size, price_per_hour, cliente, responseMessage, 
        loading, image, takePhoto, pickImage, createCancha, onChange} = useViewModel();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (responseMessage !== ''){
            ToastAndroid.show(responseMessage, ToastAndroid.LONG);
        }
    }, [responseMessage])

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Pressable onPress={() => setModalVisible(true)}>
                    {
                        image == ''
                        ?
                        <Image 
                            style={styles.logoImage}
                            source={require('../../../../../../assets/image_new.png')}
                        />
                        :
                        <Image 
                            style={styles.logoPerfil}
                            source={{uri: image}}
                        /> 
                    }
                </Pressable>
            </View>

            <View style={styles.form}>
                <CustomTextInput
                    placeholder='Nombre'
                    image={require('../../../../../../assets/nombre_cancha.png')}
                    keyboardType='default'
                    property='name'
                    value={name}
                    onChangeText={ onChange }
                />

                <CustomTextInput
                    placeholder='Categoría'
                    image={require('../../../../../../assets/categoria_cancha.png')}
                    keyboardType='default'
                    property='category'
                    value={category}
                    onChangeText={ onChange }
                />

                <CustomTextInput
                    placeholder='Capacidad'
                    image={require('../../../../../../assets/capacidad_cancha.png')}
                    keyboardType='numeric'
                    property='size'
                    value={size}
                    onChangeText={ onChange }
                />

                <CustomTextInput
                    placeholder='Precio por hora (S/)'
                    image={require('../../../../../../assets/precio_cancha.png')}
                    keyboardType='numeric'
                    property='price_per_hour'
                    value={price_per_hour}
                    onChangeText={ onChange }
                />

                <View style={styles.buttonContainer}>
                <RoundedButton
                    text='Crear cancha'
                    onPress={() => {
                        if (image === '') {
                        Alert.alert(
                            'Advertencia',
                            'Debe adjuntar una imagen de modo obligatorio para crear la cancha',
                            [
                            { text: 'Entendido' },
                            ],
                        );
                        } else {
                        createCancha(JSON.stringify(cliente.id));
                        }
                    }}
                />
                </View>
            </View>

            <ModalPickImage
                openGallery={ pickImage }
                openCamera={ takePhoto }
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
            />

            {
                loading &&
                <ActivityIndicator 
                    style={MyStyles.loading} 
                    size="large" 
                    color={MyColors.defaultText} 
                />
            }
        </View>
    )
}