import React, {Component} from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Exam from './src/screens/Exam1';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={Home} />
    //     <Tab.Screen name="Exam" component={Exam} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <View style={{flex: 1}}>
      <Login />
    </View>
  );
}

export default App;
