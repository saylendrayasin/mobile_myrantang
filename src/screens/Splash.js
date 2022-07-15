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
        <View style={styles.imgTopRightAts}>
          <Image source={require('../image/SplashTopRightAts.png')} />
        </View>
        <View style={styles.imgTopRightBwh}>
          <Image source={require('../image/SplashTopRightBwh.png')} />
        </View>
        <View style={styles.textPosition}>
          <Text style={styles.txtMy}>My</Text>
          <Text style={styles.txtRantang}>Rantang</Text>
        </View>
        <View style={styles.imgBotLeftAts}>
          <Image source={require('../image/SplashBotLeftAts.png')} />
        </View>
        <View style={styles.imgBotLeftBwh}>
          <Image source={require('../image/SplashBotLeftBwh.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headers: {
    flex: 1,
    backgroundColor: '#95CD41',
  },
  imgTopRightAts: {
    flex: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
  },
  imgTopRightBwh: {
    flex: 1,
    position: 'absolute',
    right: 0,
    top: 70,
    zIndex: 1,
  },
  imgBotLeftAts: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 2,
  },
  imgBotLeftBwh: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 1,
  },
  textPosition: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 3,
  },
  txtMy: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  txtRantang: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2d420b',
  },
});

export default Splash;
