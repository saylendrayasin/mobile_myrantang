import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CardItem from '../../components/CardItem';

function Card(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.dateDays}>{props.day}</Text>
        <CardItem mealTime="Contoh Menu Makanan" />
      </View>
    </View>
  );
}

export default function PageTree() {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Warning',
      'Anda memiliki riwayat penyakit diabetes. menu ini megandung bahan makanan yang dapat memperburuk kondisi anda',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'I Understand',
          onPress: () => console.log('I Understand Pressed'),
        },
      ],
    );
  return (
    <ScrollView>
      <View style={styles.viewTitle}>
        <Text style={styles.txtTitle}>Choose Menu</Text>
        <Text style={styles.txtUnderTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.txtContent}>Menu</Text>
        <TouchableOpacity>
          <Card day="Lorem" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={createTwoButtonAlert}>
          <Text style={styles.txtWarning}>
            Menu ini mungkin berbahaya bagi anda!
          </Text>
          <Card day="Porem" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 0,
  },
  txtContent: {padding: 10},
  viewTitle: {
    alignItems: 'center',
  },
  txtWarning: {
    color: 'white',
    marginTop: 10,
    backgroundColor: 'crimson',
    marginHorizontal: 10,
    marginVertical: -18,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  txtTitle: {
    color: '#000',
    marginTop: 10,
    fontSize: 34,
    fontWeight: 'bold',
    elevation: 5,
  },
  txtUnderTitle: {
    paddingHorizontal: 50,
    fontSize: 14,
    textAlign: 'center',
  },
  cardContainer: {
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: '#DDFFAA',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  dateDays: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#456711',
  },
});
