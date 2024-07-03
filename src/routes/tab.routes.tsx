import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Feed from '../screens/Feed';
import New from '../screens/New';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
      <Tab.Navigator>
        <Tab.Screen
            name="feed"
            component={Feed}
            options={{
             tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
             tabBarLabel: 'Início'
            }}
        />

        <Tab.Screen
            name="new"
            component={New}
            options={{
                tabBarIcon: ({ color, size })  => <Feather name="plus"/>,
                tabBarLabel: 'Novo'
            }}            
        />
      </Tab.Navigator>
    );
}
