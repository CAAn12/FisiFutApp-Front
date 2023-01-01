import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { AdminCanchasListScreen } from '../views/admin/category/list/CategoryList';
import { AdminGananciasListScreen } from '../views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/profileInfo';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="AdminCanchasListScreen" 
        component={AdminCanchasListScreen}
        options={{
          title: 'Canchas',
          tabBarLabel: 'Canchas',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../../assets/nombre_cancha.png')}
              style={{width: 25, height: 25}}
            />
          )
        }}  
      />

      <Tab.Screen 
        name="AdminGananciasListScreen" 
        component={AdminGananciasListScreen}
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