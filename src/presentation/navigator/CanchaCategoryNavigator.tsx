import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Cancha } from '../../domain/entities/Cancha';
import { CanchaProvider } from '../context/CanchaContext';
import { CanchaAdminCreateScreen } from '../views/cancha/category/create/CategoryCreate';
import { CanchaAdminUpdateScreen } from '../views/cancha/category/update/CategoryUpdate';
import { CanchaAdminListScreen } from '../views/cancha/category/list/CategoryList';
import { MyColors } from '../theme/AppTheme';
import { Image, Pressable } from 'react-native';

export type CanchaStackParamList = {
    CanchaAdminCreateScreen: undefined,
    CanchaAdminUpdateScreen: { cancha: Cancha },
    CanchaAdminListScreen: undefined
}

const Stack = createNativeStackNavigator<CanchaStackParamList>();

export const CanchaCategoryNavigator = () => {
    return(
        <CanchaState>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name='CanchaAdminListScreen'
                    component={CanchaAdminListScreen}
                    options={({route, navigation}) => (
                        {
                            headerShown: true,
                            title: 'Admin',
                            headerRight: () => (
                                <Pressable
                                onPress={() => {
                                    navigation.navigate('CanchaAdminCreateScreen');
                                }}
                                >
                                <Image
                                    source={require('../../../assets/add.png')}
                                    style={{width: 40, height: 40}}
                                />
                                </Pressable>
                            ),
                            headerTintColor: MyColors.defaultText,
                            headerStyle: {
                                backgroundColor: MyColors.background
                            }
                        })
                    }
                />

                <Stack.Screen
                    name='CanchaAdminCreateScreen'
                    component={CanchaAdminCreateScreen}
                    options={{
                        headerShown: true,
                        title: 'Nueva cancha',
                        headerTintColor: MyColors.defaultText,
                        headerStyle: {
                            backgroundColor: MyColors.background
                        }
                    }}
                />

                <Stack.Screen
                    name='CanchaAdminUpdateScreen'
                    component={CanchaAdminUpdateScreen}
                    options={{
                        headerShown: true,
                        title: 'Actualizar cancha',
                        headerTintColor: MyColors.defaultText,
                        headerStyle: {
                            backgroundColor: MyColors.background
                        }
                    }}
                />            
            </Stack.Navigator>
        </CanchaState>
    )
}

const CanchaState = ({children}: any) => {
    return (
        <CanchaProvider>
            {children}
        </CanchaProvider>
    )
}