import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

class Cta extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{padding: 20}}>
        <View style={styles.header}>
          <View style={styles.headerVerticalLeft}>
            <Text>Hello World</Text>
            <TouchableOpacity style={styles.btnGetStarted}>
              <Text>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerVerticalRight}>
            <Image
              style={styles.imgBanana}
              source={require('../image/Banana.jpg')}
            />
            <Image
              source={require('../image/Ellipse5.png')}
              style={styles.imgElips1}
            />
            <Image
              source={require('../image/Ellipse6.png')}
              style={styles.imgElips2}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    borderRadius: 20,
    backgroundColor: '#95CD41',
    flex: 1,
    flexDirection: 'row',
    // paddingBottom: 40,
    marginVertical: 8,
    // marginHorizontal: 0,
  },

  headerVerticalLeft: {
    flex: 0.6,
    padding: 18,
  },

  headerVerticalRight: {
    flex: 0.4,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  btnGetStarted: {
    backgroundColor: 'white',
    marginTop: 10,
    width: 120,
    height: 35,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgBanana: {
    zIndex: 3,
    position: 'absolute',
    top: -35,
    right: -10,
  },

  imgElips1: {
    zIndex: 2,
    position: 'relative',
  },

  imgElips2: {
    zIndex: 1,
    position: 'absolute',
    top: 60,
    right: 50,
  },
});

export default Cta;
