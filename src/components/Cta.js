import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Avatar, Button} from '@rneui/themed';

export default function Cta(props) {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.container}>
          <Avatar
            size={64}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.avatar}
          />
          <Text style={styles.TextCta}>{props.text}</Text>
        </View>
        <Text style={styles.cardDetails}></Text>
        <Image source={require('../image/Ellipse5.png')} style={styles.bgvec} />
        <Image
          source={require('../image/Ellipse6.png')}
          style={styles.bgvec2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#95CD41',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    height: 120,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },

  bgvec: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: -10,
    borderTopRightRadius: 10,
  },
  bgvec2: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    right: 0,
  },
  TextCta: {
    zIndex: 3,
    width: 300,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
