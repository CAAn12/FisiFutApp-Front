import React, { useEffect } from 'react'
import { Image, View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}: Props) => {
    const { email, password, errorMessage, onChange, login, cliente} = useViewModel();
        
    useEffect(() => {
        if (errorMessage !== ''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])
    
    useEffect(() => {
        if(cliente?.id !== null && cliente?.id !== undefined && cliente?.id !== ''){
            if (cliente.roles?.length! > 1){
                navigation.replace('RolesScreen');
            }
            else {
                navigation.replace('ClienteTabsNavigator');
            }
        }
    }, [cliente])

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logoImage}
                    source={require('../../../../assets/logo-fisifut.png')}
                />
                
                <Text style={styles.logoText}>Jugar al fútbol es simple</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>Login</Text>

                <CustomTextInput
                    image={require('../../../../assets/email.png')}
                    placeholder='Correo electrónico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />

                <CustomTextInput
                    image={require('../../../../assets/password.png')}
                    placeholder='Contraseña'
                    keyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />

                <View style={{marginTop: 45}}>
                    <RoundedButton 
                        text='Iniciar sesión' 
                        onPress={()=>login()}
                    />
                </View>

                <View style={styles.formRegister}>
                    <Text style={styles.formRegisterText1}>¿Aún no tienes cuenta?</Text>

                    <TouchableOpacity onPress={()=>navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterText2}>Regístrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}