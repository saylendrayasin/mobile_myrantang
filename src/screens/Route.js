import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Explore from './Explore';
import Exam from './Exam1';
import Login from './Login';
import Regis from './Register';
import Splash from './Splash';
import {Icon} from '@rneui/base';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavScreen = () => {
  const color = '#808080';
  const size = 90;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#95CD41',
        tabBarStyle: {
          padding: 10,
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          // tabBarLabelStyle: {fontSize: 30},
          tabBarIcon: ({color}) => (
            <Icons
              name="home"
              color={color}
              size={30}
              // style={{marginTop: 10}}
            />
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
      <Tab.Screen
        name="Exams"
        component={Exam}
        options={{
          tabBarLabel: 'Kontol',
          tabBarIcon: ({color}) => (
            <Icons name="user-ninja" color={color} size={30} />
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({color}) => (
            <Icons name="map-marker-alt" color={color} size={30} />
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
