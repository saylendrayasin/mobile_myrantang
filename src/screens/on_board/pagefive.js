import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function PageFive({navigation}) {
  const [cardHolder, setcardHolder] = useState('');
  const [cardNumber, setcardNumber] = useState('');
  const [exp, setexp] = useState('');
  const [cvc, setcvc] = useState('');
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Payment</Text>
          <Text style={styles.txtUnderTitle}>
            Add Credit card for subscribtions
          </Text>
          <Image
            source={require('../../image/Pembayaran.png')}
            style={{margin: 10}}
          />
        </View>
        <View style={styles.viewContent}>
          <Text style={styles.txtContainer}>Data</Text>
          <SafeAreaView style={styles.sav}>
            <TextInput
              value={cardHolder}
              onChangeText={cardHolder => setcardHolder(cardHolder)}
              style={styles.textinput}
              placeholder="Card Holder"
              keyboardType="default"
            />
          </SafeAreaView>

          <SafeAreaView style={styles.sav}>
            <TextInput
              value={cardNumber}
              onChangeText={cardNumber => setcardNumber(cardNumber)}
              style={styles.textinput}
              placeholder="Card Number"
              keyboardType="numeric"
            />
          </SafeAreaView>

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            <SafeAreaView style={[styles.sav, {flex: 1}]}>
              <TextInput
                value={exp}
                onChangeText={exp => setexp(exp)}
                style={[styles.textinput, {paddingRight: 10}]}
                placeholder="Exp"
              />
            </SafeAreaView>

            <View style={{flex: 1}} />

            <SafeAreaView style={[styles.sav, {flex: 1}]}>
              <TextInput
                value={cvc}
                onChangeText={cvc => setcvc(cvc)}
                style={styles.textinput}
                placeholder="CVC"
                keyboardType="numeric"
                maxLength={3}
              />
            </SafeAreaView>
          </View>
        </View>
      </ScrollView>
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 25,
            zIndex: 3,
            right: 25,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PageSix')}
            style={styles.btnNext}
            activeOpacity={0.8}>
            <Icon name="check" style={{fontSize: 25, color: '#fff'}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sav: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#95CD41',
    borderRadius: 10,
    backgroundColor: '#F6FFE8',
  },
  textinput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  btnBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#929292',
  },
  btnNext: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#95CD41',
  },
  viewTitle: {
    alignItems: 'center',
  },
  txtTitle: {
    color: '#000',
    marginTop: 10,
    fontSize: 34,
    fontWeight: 'bold',
    elevation: 5,
  },
  txtUnderTitle: {
    fontSize: 14,
  },
  viewContent: {
    paddingHorizontal: 10,
  },
  txtContainer: {fontSize: 16, marginTop: 10},
});
