import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Profile from '../components/Profile';
import CardContainer from '../components/CardContainer';
import Cta from '../components/Cta';

export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaProvider>
      <ScrollView bounces={true}>
        <View>
          <Profile />
          <Text style={styles.TextMenu}>Menu</Text>
          <CardContainer />
          <Cta text="Take care of your body. It's the only place you have to live" />
          <Cta text="The first wealth is health" />
          <View style={{marginTop: 100}}></View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  TextMenu: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#456711',
    marginTop: 10,
    marginLeft: 10,
  },
});
