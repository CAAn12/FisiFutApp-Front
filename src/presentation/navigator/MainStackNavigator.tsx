import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Cancha } from '../../domain/entities/Cancha';
import { Cliente } from '../../domain/entities/Cliente';
import { HomeScreen } from '../../../src/presentation/views/home/Home';
import { RegisterScreen } from '../../../src/presentation/views/register/Register';
import { MyColors } from '../../../src/presentation/theme/AppTheme'
import { RolesScreen } from '../../../src/presentation/views/roles/Roles';
import { CanchaTabsNavigator } from '../../../src/presentation/navigator/CanchaTabsNavigator';
import { ClienteTabsNavigator } from '../../../src/presentation/navigator/ClienteTabsNavigator';
import { AdminTabsNavigator } from '../../../src/presentation/navigator/AdminTabsNavigator';
import { ProfileUpdateScreen } from '../../../src/presentation/views/profile/update/ProfileUpdate';
import { ClienteProvider } from '../../../src/presentation/context/ClienteContext';
import { CanchaAdminCreateScreen } from '../../../src/presentation/views/cancha/category/create/CategoryCreate';
import { CanchaAdminUpdateScreen } from '../../../src/presentation/views/cancha/category/update/CategoryUpdate';
import { CanchaProvider } from '../../../src/presentation/context/CanchaContext';

export type RootStackParamList = {
    HomeScreen: undefined,
    RegisterScreen: undefined,
    RolesScreen: undefined,
    AdminTabsNavigator: undefined,
    ClienteTabsNavigator: undefined,
    CanchaTabsNavigator: undefined,
    ProfileUpdateScreen: {cliente: Cliente }
  }

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
    return (
        <ClienteState>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                />
            
                <Stack.Screen 
                    name='RegisterScreen' 
                    component={RegisterScreen}
                    options={{
                        headerShown: true,
                        title: 'Nuevo usuario',
                        headerTintColor: MyColors.defaultText,
                        headerStyle: {
                            backgroundColor: MyColors.background
                        }
                    }}
                />

                <Stack.Screen 
                    name='RolesScreen' 
                    component={RolesScreen}
                    options={{
                        headerShown: true,
                        title: 'Seleccione un rol',
                        headerTintColor: MyColors.defaultText,
                        headerStyle: {
                            backgroundColor: MyColors.background
                        }
                    }}
                />
            
                <Stack.Screen
                    name='AdminTabsNavigator'
                    component={AdminTabsNavigator}
                />
            
                <Stack.Screen
                    name='ClienteTabsNavigator'
                    component={ClienteTabsNavigator}
                />

                <Stack.Screen
                    name='CanchaTabsNavigator'
                    component={CanchaTabsNavigator}
                />

                <Stack.Screen
                    name='ProfileUpdateScreen'
                    component={ProfileUpdateScreen}
                    options={{
                    headerShown: true,
                    title: 'Actualizar usuario',
                    headerTintColor: MyColors.defaultText,
                    headerStyle: {
                        backgroundColor: MyColors.background
                    }
                    }}
                />
            </Stack.Navigator>
        </ClienteState>        
    )
}

const ClienteState = ({ children }: any) => {
    return (
      <ClienteProvider>
        { children }
      </ClienteProvider>
    )
  }