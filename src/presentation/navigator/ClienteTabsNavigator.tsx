import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClienteAlquilerListScreen } from '../views/cliente/category/list/CategoryList';
import { ClienteRolesListScreen } from '../views/cliente/reservation/list/ReservationList';
import { ProfileInfoScreen } from '../views/profile/info/profileInfo';

const Tab = createBottomTabNavigator();

export const ClienteTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="ClienteAlquilerListScreen" 
        component={ClienteAlquilerListScreen}
        options={{
          title: 'Alquiler',
          tabBarLabel: 'Alquiler'
        }}
      />
      
      <Tab.Screen 
        name="ClienteRolesListScreen" 
        component={ClienteRolesListScreen}
        options={{
          title: 'Roles',
          tabBarLabel: 'Roles'
        }}
      />
      
      <Tab.Screen 
        name="ProfileInfoScreen" 
        component={ProfileInfoScreen}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}