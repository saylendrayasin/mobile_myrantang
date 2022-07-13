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
          <View style={styles.headerHoriz}>
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
                resizeMode="stretch"
              />
              <Image
                source={require('../image/Ellipse5.png')}
                style={styles.imgElips1}
                resizeMode="stretch"
              />
              <Image
                source={require('../image/Ellipse6.png')}
                style={styles.imgElips2}
                resizeMode="stretch"
              />
            </View>
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
    padding: 18,
    // paddingBottom: 40,
    marginVertical: 8,
    // marginHorizontal: 0,
  },

  headerHoriz: {
    flex: 1,
    flexDirection: 'row',
  },

  headerVerticalLeft: {
    flex: 0.6,
  },

  headerVerticalRight: {
    flex: 0.4,
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
    top: -50,
    right: -5,
  },

  imgElips1: {
    zIndex: 2,
  },

  imgElips2: {
    zIndex: 1,
  },
});

export default Cta;
