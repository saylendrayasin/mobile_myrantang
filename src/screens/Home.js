import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import Cta from '../components/Cta';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={styles.headers}>
        <Cta />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headers: {
    padding: 0,
    flex: 1,
  },
});

export default Home;
