import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Pressable } from 'react-native';
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
        options={ ({route, navigation}) => (
          {
            title: 'Admin',
            tabBarLabel: 'Admin',
            headerRight: () => (
              <Pressable
                onPress={() => {
                  navigation.navigate('CanchaAdminCreateScreen');
                }}
              >
                <Image
                  source={require('../../../assets/add.png')}
                  style={{width: 40, height: 40, marginRight: 15}}
                />
              </Pressable>
            )
        })}
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