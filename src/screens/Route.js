import React, {useState, useEffect} from 'react';
import {StyleSheet, BackHandler, Alert, Easing, StatusBar} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Home from './Home';
import Explore from './Explore';
import Exam from './Exam1';
import Login from './Login';
import Regis from './Register';
import Splash from './Splash';
import PageOne from './on_board/pageone';
import PageTwo from './on_board/pagetwo';
import PageTree from './on_board/pagetree';
import PageFour from './on_board/pagefour';
import PageFive from './on_board/pagefive';
import {Icon} from '@rneui/base';
import Menu from './Menu';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavScreen = () => {
  const color = '#808080';
  const size = 90;

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'YES', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

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
            <MaterialIcons
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
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="restaurant-menu" color={color} size={30} />
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
            <MaterialIcons name="location-on" color={color} size={30} />
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
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          // gestureEnabled: true,
          // gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Regis} />
        <Stack.Screen name="PageOne" component={PageOne} />
        <Stack.Screen name="PageTwo" component={PageTwo} />
        <Stack.Screen name="PageTree" component={PageTree} />
        <Stack.Screen name="PageFour" component={PageFour} />
        <Stack.Screen name="PageFive" component={PageFive} />
        <Stack.Screen name="Home" component={NavScreen} />
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
