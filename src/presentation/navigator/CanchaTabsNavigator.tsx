import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Pressable } from 'react-native';
import { MyColors } from '../theme/AppTheme';
import { CanchaAdminListScreen } from '../views/cancha/category/list/CategoryList';
import { CanchaGananciasListScreen } from '../views/cancha/reservation/list/ReservationList';
import { ProfileInfoScreen } from '../views/profile/info/profileInfo';
import { CanchaCategoryNavigator } from './CanchaCategoryNavigator';

const Tab = createBottomTabNavigator();

export const CanchaTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="CanchaCategoryNavigator" 
        component={CanchaCategoryNavigator}
        options={{
          title: 'Admin',
          tabBarLabel: 'Admin',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../../assets/nombre_cancha.png')}
              style={{width: 25, height: 25}}
            />
          )
        }}
      />

      <Tab.Screen 
        name="CanchaGananciasListScreen" 
        component={CanchaGananciasListScreen}
        options={{
          title: 'Ganancias',
          tabBarLabel: 'Ganancias',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../../assets/precio_cancha.png')}
              style={{width: 25, height: 25}}
            />
          )
        }}
      />
      
      <Tab.Screen 
        name="ProfileInfoScreen" 
        component={ProfileInfoScreen}
        options={{
          tabBarLabel: 'Perfil',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../../assets/user.png')}
              style={{width: 25, height: 25}}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}