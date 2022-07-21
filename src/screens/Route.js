import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Explore from './Explore';
import Exam from './Exam1';
import Login from './Login';
import Regis from './Register';
import Splash from './Splash';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="Homes"
        component={Home}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Exams"
        component={Exam}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Explore"
        component={Explore}
      />
    </Tab.Navigator>
  );
};

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={NavScreen} />
        <Stack.Screen name="Register" component={Regis} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
