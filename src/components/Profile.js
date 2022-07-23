import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Avatar} from '@rneui/themed';

export default function Profile() {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.profile}>
          <Avatar
            size={64}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.avatar}
          />
          <Text style={styles.profileName}>Mr. Jordy</Text>
        </View>
        <View style={styles.caloriesContainer}>
          <Text style={styles.caloriesText}>Total Calories</Text>
          <Text style={styles.caloriesTotal}>300</Text>
        </View>
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
    height: 150,
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 200,
  },
  bgvec: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 10,
  },
  bgvec2: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    right: 0,
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  caloriesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  caloriesText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#456711',
    marginTop: 15,
  },
  caloriesTotal: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 55,
  },
});
