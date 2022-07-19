import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CardItem from './CardItem';

export default function Card(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.dateDays}>{props.day}</Text>
        <CardItem mealTime="Breakfast" />
        <CardItem mealTime="Lunch" />
        <CardItem mealTime="Dinner" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: '#DDFFAA',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  dateDays: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#456711',
  },
});
