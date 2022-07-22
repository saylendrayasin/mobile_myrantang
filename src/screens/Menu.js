import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

function ItemCards(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cards}>
        <View>
          <Text style={styles.cardTitle}>Lorem Ipsum</Text>
          <Text style={styles.cardMealTime}>{props.mealTime}</Text>
        </View>
        <Text style={styles.cardDetails}>Click for details</Text>
        <Image
          source={require('../image/cardImg.png')}
          style={styles.cardImg}
        />
        <Image
          source={require('../image/Ellipse6.png')}
          style={styles.cardBg}
        />
      </View>
    </View>
  );
}

export default function Menu({navigation}) {
  const [IsSelected, setIsSelected] = useState(true);
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
    <View style={{flex: 1}}>
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
            <ItemCards mealTime="Halo" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity onPress={createTwoButtonAlert}>
            <Text style={styles.txtWarning}>
              Menu ini mungkin berbahaya bagi anda!
            </Text>
            <ItemCards mealTime="wkwkwk" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity>
            <ItemCards mealTime="Anjim" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <View
        style={{
          position: 'absolute',
          top: 20,
          zIndex: 3,
          right: 0,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Payment')}
          style={styles.btnNext}
          activeOpacity={0.8}>
          <AntDesign name="right" style={{fontSize: 25, color: '#fff'}} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // btnNext: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   backgroundColor: '#456711',
  // },
  cards: {
    backgroundColor: '#95CD41',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    height: 120,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardMealTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#456711',
  },
  cardDetails: {
    fontSize: 12,
    color: '#456711',
  },
  cardImg: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  cardBg: {
    position: 'absolute',
    bottom: -20,
    right: -20,
    zIndex: -1,
  },
  content: {
    // flex: 1
    marginTop: 10,
  },
  txtContent: {paddingHorizontal: 10},
  viewTitle: {
    // flex: 1,
    alignItems: 'center',
  },
  txtWarning: {
    color: 'white',
    marginTop: 10,
    backgroundColor: 'crimson',
    marginHorizontal: 20,
    marginVertical: -25,
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
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  dateDays: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#456711',
  },
});
