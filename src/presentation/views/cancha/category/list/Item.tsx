import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Cancha } from '../../../../../domain/entities/Cancha'
import { MyColors } from '../../../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { Alert } from 'react-native';
import { CanchaStackParamList } from '../../../../navigator/CanchaCategoryNavigator';

interface Props {
    cancha: Cancha;
    remove: (id: string) => void;
}

export const CanchaListItem = ({cancha, remove}: Props) => {
    const firstImages = cancha.images.split(',')[0];

    const navigation = useNavigation<StackNavigationProp<CanchaStackParamList>>();

    const handlePressRemove = () => {
        Alert.alert(
            'Eliminar cancha',
            '¿Estás seguro de que quieres eliminar esta cancha?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Eliminar',
                    onPress: () => remove(cancha.id!),
                    style: 'destructive'
                }
            ]
        );
    };

    return (
        <Pressable>
            <View style = { styles.container }>
                <Image
                    style = { styles.image }
                    source = {{ uri: firstImages}}
                />

                <View style = { styles.info }>
                    <Text style = { styles.title }>{cancha.name}</Text>
                    <Text style = { styles.description }>Categoría: {cancha.category}</Text>
                    <Text style = { styles.description }>Aforo: {cancha.size} personas</Text>
                    <Text style = { styles.description }>Precio por hora: S/{cancha.price_per_hour}</Text> 
                </View>

                <View style = { styles.actionContainer }>
                    <Pressable
                        onPress={() => navigation.navigate('CanchaAdminUpdateScreen', { cancha: cancha})}
                    >
                        <Image
                            source = {require('../../../../../../assets/edit.png')}
                            style = {styles.actionImage}
                        />
                    </Pressable>

                    <Pressable 
                        onPress={handlePressRemove}
                    >
                        <Image
                            source={require('../../../../../../assets/delete.png')}
                            style={styles.actionImage}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.divider}></View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
        marginHorizontal: 15,
        marginTop: 15,
        flex: 1,
        backgroundColor: 'black'
    },
    image: {
        width: 100,
        heigth: 100,
        resizeMode: 'contain',
        borderRadius: 5,
        top: 5
    },
    info: {
        marginLeft: 10,
        flex: 1
    },
    title: {
        color: MyColors.defaultText,
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        color: MyColors.defaultText,
        fontSize: 15
    },
    actionImage: {
        width: 25,
        height: 25,
        marginVertical: 5,
        marginTop: 20
    },
    actionContainer: {
        marginRight: 35
    },
    divider: {
        height: 1,
        backgroundColor: MyColors.defaultText,
        flex: 1,
        marginHorizontal: 30,
        top: 10,
        margin: 10
    }
})