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
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AntDesign from 'react-native-vector-icons/AntDesign';

function ItemCards(props) {
  const [color, setColor] = useState('#78CE34');
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.cards, props.active ? styles.active : styles.cards]}>
        <View>
          <Text style={styles.cardTitle}>{props.title}</Text>
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
  const [menu, setMenu] = useState('menu1');
  const [Visible, setVisible] = useState(false);
  const [diabetes, setdiabetes] = useState('Diabetes');

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Choose Menu</Text>
          <Text style={styles.txtUnderTitle}>Edit your plan next week</Text>
        </View>

        <Modal isVisible={Visible}>
          <View
            style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Icon
                name="exclamation-circle"
                size={26}
                color="crimson"
                style={{marginRight: 10}}
              />
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                Warning
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center', fontSize: 16, color: '#000'}}>
                Anda memiliki riwayat penyakit penyakit{' '}
                <Text style={{color: 'crimson', fontWeight: 'bold'}}>
                  Diabetes
                </Text>{' '}
                menu ini megandung bahan makanan yang dapat memperburuk kondisi
                anda berdasarkan hukum kesehatan
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={{
                  padding: 5,
                  borderWidth: 1,
                  borderRadius: 5,
                  marginHorizontal: 10,
                  borderColor: 'crimson',
                }}
                onPress={() => {
                  setVisible(!Visible);
                }}>
                <Text style={{fontSize: 14, color: 'crimson'}}>
                  I Understand
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 5,
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  marginLeft: 10,
                  borderColor: 'crimson',
                  backgroundColor: 'crimson',
                }}
                onPress={() => {
                  setVisible(!Visible);
                  setMenu('menu1');
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.content}>
          <Text style={styles.txtContent}>Menu</Text>
          <TouchableOpacity onPress={() => setMenu('menu1')}>
            <ItemCards
              title="Vegan"
              mealTime="Just vegetable without meat"
              active={menu === 'menu1' ? true : false}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              setMenu('menu2');
              setVisible(!Visible);
            }}>
            <Text style={styles.txtWarning}>
              This menu may be dangerous for you!
            </Text>
            <ItemCards
              title="Meat"
              mealTime="Contain more meat"
              active={menu === 'menu2' ? true : false}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => setMenu('menu3')}>
            <ItemCards
              title="Diet"
              mealTime="Less calories, less sugar"
              active={menu === 'menu3' ? true : false}
            />
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
  active: {
    backgroundColor: '#6EA31E',
    // borderWidth: 3,
    // borderColor: '#456711',
  },
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
    height: 100,
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
  txtContent: {paddingHorizontal: 20, fontSize: 16, fontWeight: 'bold'},
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
