import React, { useState, useEffect } from 'react'
import { Alert, ActivityIndicator, Image, Pressable, ScrollView, ToastAndroid, View } from 'react-native'
import { CustomTextInput } from '../../../../components/CustomTextInput';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import { RoundedButton } from '../../../../components/RoundedButton';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import styles from './Styles'
import useViewModel from './ViewModel';

export const CanchaAddressCreateScreen = () => {
    const { address, district, refPoint , cliente, responseMessage, 
        loading, createCancha, onChange} = useViewModel();
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
                    <Image 
                        style={styles.logoImage}
                        source={require('../../../../../../assets/map.png')}
                    />
                </Pressable>
            </View>

            <View style={styles.form}>
                <CustomTextInput
                    placeholder='Dirección'
                    image={require('../../../../../../assets/direccion.png')}
                    keyboardType='default'
                    property='address'
                    value={address}
                    onChangeText={ onChange }
                />

                <CustomTextInput
                    placeholder='Distrito'
                    image={require('../../../../../../assets/distrito.png')}
                    keyboardType='default'
                    property='district'
                    value={district}
                    onChangeText={ onChange }
                />

                <CustomTextInput
                    placeholder='Punto de referencia'
                    image={require('../../../../../../assets/referencia.png')}
                    keyboardType='default'
                    property='refPoint'
                    value={refPoint}
                    onChangeText={ onChange }
                />

                <View style={styles.buttonContainer}>
                <RoundedButton
                    text='Crear dirección'
                    onPress={() => {createCancha(JSON.stringify(cliente.id));}}
                />
                </View>
            </View>

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