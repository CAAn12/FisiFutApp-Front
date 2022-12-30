import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
          tabBarLabel: 'Canchas'
        }}  
      />

      <Tab.Screen 
        name="AdminGananciasListScreen" 
        component={AdminGananciasListScreen}
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