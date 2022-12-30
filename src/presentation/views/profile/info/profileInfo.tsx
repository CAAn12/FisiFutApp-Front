import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../../../../../App';
import useViewModel from './ViewModel';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { MyColors } from '../../../theme/AppTheme';
import { RoundedButton } from '../../../components/RoundedButton';

export const ProfileInfoScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { cliente, removeClienteSession } = useViewModel();

    useEffect(() => {
        if (cliente.id === ''){
            navigation.replace('HomeScreen');
        }
    }, [cliente])

    return (    
        <View style = { styles.container }>
            <TouchableOpacity 
                style={styles.logout} 
                onPress={() => {
                    removeClienteSession();
                }}
            >
                <Image 
                    source={require('../../../../../assets/logout.png')}
                    style={styles.logoutImage}
                />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                { 
                    cliente?.image !== '' && 
                    <Image 
                        source={{ uri: cliente?.image }}
                        style={styles.logoImage}
                    />
                }

            </View>

            <View style={styles.form}>
                <View style={styles.formInfo}>
                    <Image
                        source={require('../../../../../assets/user.png')}
                        style={ styles.formImage }
                    />
                    <View style={styles.formContent}>
                        <Text 
                            style={{ color: MyColors.defaultText, fontSize: 16}}>
                            { cliente?.name } { cliente?.lastname }
                        </Text>
                        <Text 
                            style={styles.formTextDescription}>
                            Nombre del usuario
                        </Text>
                    </View>
                </View> 

                <View style={{...styles.formInfo, marginTop: 25}}>
                    <Image
                        source={require('../../../../../assets/email.png')}
                        style={ styles.formImage }
                    />
                    <View style={styles.formContent}>
                        <Text 
                            style={{ color: MyColors.defaultText, fontSize: 16}}>
                            { cliente?.email }
                        </Text>
                        <Text 
                            style={styles.formTextDescription}>
                            Correo electrónico
                        </Text>
                    </View>
                </View> 

                <View style={{...styles.formInfo, marginTop: 25, marginBottom: 70}}>
                    <Image
                        source={require('../../../../../assets/phone.png')}
                        style={ styles.formImage }
                    />
                    <View style={styles.formContent}>
                        <Text 
                            style={{ color: MyColors.defaultText, fontSize: 16}}>
                            { cliente?.phone }
                        </Text>
                        <Text 
                            style={styles.formTextDescription}>
                            Teléfono celular
                        </Text>
                    </View>
                </View>

                <RoundedButton
                    onPress={() => {navigation.navigate('ProfileUpdateScreen', { cliente: cliente!})}}
                    text='Actualizar información'
                /> 
            </View>
        </View>
    )
}