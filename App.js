import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Profile from './src/components/Profile';
import CardContainer from './src/components/CardContainer';
import Cta from './src/components/Cta';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView bounces={true}>
        <View>
          <Profile />
          <Text style={styles.TextMenu}>Menu</Text>
          <CardContainer />
          <Cta />
          <Cta />
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
