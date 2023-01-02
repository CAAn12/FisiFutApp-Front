import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import { Rol } from '../../../domain/entities/Rol';
import { MyColors } from '../../theme/AppTheme';

interface Props {
    rol: Rol,
    height: number,
    width: number,
    navigation: StackNavigationProp<RootStackParamList, "RolesScreen", undefined>
}

export const RolesItem = ({rol, height, width, navigation}: Props) => {
    return (
        <View style = { styles.containerTotal }>
            <TouchableOpacity 
                onPress = { () => {
                    if (rol.name == 'Gestor de canchas') {
                        navigation.replace('CanchaTabsNavigator');
                    }
                    else if (rol.name == 'Cliente') {
                        navigation.replace('ClienteTabsNavigator');
                    }
                    else if (rol.name == 'Administrador'){
                        navigation.replace('AdminTabsNavigator');
                    }
                }}
                style = {{ ...styles.container, height: height, width: width }}
            >
                <View style = { styles.imageContainer}>
                    <Image
                        style = { styles.image }
                        source = {{ uri: rol.image }}
                    />
                    <View
                        style = { styles.titleContainer }>
                        <Text style = { styles.title }>
                            { rol.name }
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTotal: {
        flex: 1,
        backgroundColor: MyColors.background
    },
    container: {
        alignSelf: 'center',
        paddingBottom: 20,
        paddingHorizontal: 7
    },
    imageContainer: {
        flex: 1,
        backgroundColor: MyColors.tertiary,
        borderRadius: 20
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    titleContainer: {
        height: 50,
        backgroundColor: MyColors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    title: {
        color: MyColors.background,
        fontSize: 18
    }
})