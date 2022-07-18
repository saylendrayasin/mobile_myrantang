import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import Cta from '../components/Cta';

const Home = () => {
  return (
    <ScrollView style={styles.headers}>
      <Cta />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headers: {
    padding: 0,
    flex: 1,
  },
});

export default Home;
