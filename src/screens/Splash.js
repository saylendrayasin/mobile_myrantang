import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.headers}>
        <View>
          <Image source={require('../image/SplashTopRightAts.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headers: {
    flex: 1,
  },
});

export default Splash;
