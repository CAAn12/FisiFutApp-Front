import React, { useEffect, useState } from 'react'
import { Image, View, Text, ScrollView, ToastAndroid, TouchableOpacity, ActivityIndicator } from 'react-native';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel'
import styles from './Styles'
import { ModalPickImage } from '../../components/ModalPickImage';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import { MyColors } from '../../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'>{};

export const RegisterScreen = ({navigation, route}: Props) => {

    const {name, lastname, email, image, phone, password, confirmPassword, loading,
        errorMessage, cliente, onChange, register, pickImage, takePhoto} = useViewModel();
    
    const [modalVisible, setModalVisible] = useState(false);
    
    useEffect(() => {
        if (errorMessage != ''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])  
    
    useEffect(() => {
        if(cliente?.id !== null && cliente?.id !== undefined){
            navigation.replace('ClienteTabsNavigator');
        }
    }, [cliente])

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    {
                        image == ''
                        ?
                        <Image 
                            style={styles.logoImage}
                            source={require('../../../../assets/profile-picture.png')}
                        />
                        :
                        <Image 
                            style={styles.logoPerfil}
                            source={{uri: image}}
                        /> 
                    }
                </TouchableOpacity>
                <Text style={styles.logoText}>Seleccione imagen de perfil</Text>
            </View>

            <View style={styles.form}>
                <ScrollView>
                    <Text style={styles.formText}>Registro</Text>

                    <CustomTextInput
                        placeholder='Nombres'
                        keyboardType='default'
                        image={require('../../../../assets/user.png')}
                        property='name'
                        onChangeText={onChange}
                        value={name}
                    />

                    <CustomTextInput
                        placeholder='Apellidos'
                        keyboardType='default'
                        image={require('../../../../assets/user.png')}
                        property='lastname'
                        onChangeText={onChange}
                        value={lastname}
                    />

                    <CustomTextInput
                        placeholder='Teléfono celular'
                        keyboardType='numeric'
                        image={require('../../../../assets/phone.png')}
                        property='phone'
                        onChangeText={onChange}
                        value={phone}
                    />

                    <CustomTextInput
                        placeholder='Correo electrónico'
                        keyboardType='email-address'
                        image={require('../../../../assets/email.png')}
                        property='email'
                        onChangeText={onChange}
                        value={email}
                    />

                    <CustomTextInput
                        placeholder='Contraseña'
                        keyboardType='default'
                        image={require('../../../../assets/password.png')}
                        property='password'
                        onChangeText={onChange}
                        value={password}
                        secureTextEntry={true}
                    />

                    <CustomTextInput
                        placeholder='Confirmar contraseña'
                        keyboardType='default'
                        image={require('../../../../assets/password.png')}
                        property='confirmPassword'
                        onChangeText={onChange}
                        value={confirmPassword}
                        secureTextEntry={true}
                    />

                    <View style={{marginTop: 45}}>
                        <RoundedButton 
                            text='Confirmar' 
                            onPress={()=>{register()}}
                        />
                    </View>
                </ScrollView>
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
                style={styles.loading} 
                size="large" 
                color={MyColors.defaultText} 
                />
            }
        </View>
    );
}