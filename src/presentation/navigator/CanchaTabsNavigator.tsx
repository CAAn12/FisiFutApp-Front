import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CanchaAdminListScreen } from '../views/cancha/category/list/CategoryList';
import { CanchaGananciasListScreen } from '../views/cancha/reservation/list/ReservationList';
import { ProfileInfoScreen } from '../views/profile/info/profileInfo';

const Tab = createBottomTabNavigator();

export const CanchaTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="CanchaAdminListScreen" 
        component={CanchaAdminListScreen}
        options={{
          title: 'Admin',
          tabBarLabel: 'Admin'
        }}
      />

      <Tab.Screen 
        name="CanchaGananciasListScreen" 
        component={CanchaGananciasListScreen}
        options={{
          title: 'Ganancias',
          tabBarLabel: 'Ganancias'
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