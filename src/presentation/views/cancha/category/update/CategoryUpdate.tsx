import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Button, Image, Pressable, ScrollView, ToastAndroid, View } from 'react-native'
import { CustomTextInput } from '../../../../components/CustomTextInput';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import { RoundedButton } from '../../../../components/RoundedButton';
import { CanchaStackParamList } from '../../../../navigator/CanchaCategoryNavigator';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import styles from './Styles'
import useViewModel from './ViewModel';

interface Props extends StackScreenProps<CanchaStackParamList, 'CanchaAdminUpdateScreen'>{};

export const CanchaAdminUpdateScreen = ({navigation, route}: Props) => {
    const { cancha } = route.params;
    const { name, category, size, price_per_hour, cliente, responseMessage, 
        loading, image, takePhoto, pickImage, updateCancha, onChange} = useViewModel(cancha);
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
                <ScrollView>
                    <CustomTextInput
                        placeholder='Nombre'
                        image={require('../../../../../../assets/nombre_cancha.png')}
                        keyboardType='default'
                        property='name'
                        value={name}
                        onChangeText={ onChange }
                    />

                    <CustomTextInput
                        placeholder='Categor??a'
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
                </ScrollView>

                <View style={styles.buttonContainer}>
                    <RoundedButton
                        text='Actualizar cancha'
                        onPress={() => updateCancha()}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <RoundedButton
                        text='Actualizar cancha'
                        onPress={() => updateCancha()}
                    />
                </View>        

                    <View style={styles.extraButtonsContainer}>
                        <RoundedButton
                            text='A??adir direcci??n'
                            onPress={() => navigation.navigate('CanchaAddressListScreen')}
                            style={styles.extraButton}
                        />
                        <RoundedButton
                            text='A??adir suscripci??n'
                            onPress={() => {}}
                            style={styles.extraButton}
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