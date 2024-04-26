import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CadGente from '../pages/cadGente';
import Home from '../pages/home';
import VerGente from '../pages/verGente';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator
      initialRouteName= "Homepage"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Matar Gente"
        component={CadGente}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="skull" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Homepage" component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Ver as Pessoas Mortas" component={VerGente}
              options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ghost" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
