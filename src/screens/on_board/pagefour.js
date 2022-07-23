import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function PageFour({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addres, setAddres] = useState('');
  const [postCode, setPostCode] = useState('');
  const [detailAdress, setdetailAdress] = useState('');
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Address Information</Text>
          <Text style={styles.txtUnderTitle}>
            Fill your adderss information
          </Text>
        </View>
        <View style={styles.viewContent}>
          <Text style={styles.txtContainer}>Example</Text>
          <SafeAreaView style={styles.sav}>
            <Icon name="call" style={styles.Icon} size={28} color="#95CD41" />
            <TextInput
              value={phoneNumber}
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
              style={styles.textinput}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
          </SafeAreaView>

          <SafeAreaView style={styles.sav}>
            <Icon
              name="location-on"
              style={styles.Icon}
              size={28}
              color="#95CD41"
            />
            <TextInput
              value={addres}
              onChangeText={addres => setAddres(addres)}
              style={styles.textinput}
              placeholder="Address"
              multiline={true}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.sav}>
            <Icon
              name="apartment"
              style={styles.Icon}
              size={28}
              color="#95CD41"
            />
            <TextInput
              value={detailAdress}
              onChangeText={detailAdress => setdetailAdress(detailAdress)}
              style={styles.textinput}
              placeholder="Apartment, Floor, etc..."
            />
          </SafeAreaView>

          <SafeAreaView style={styles.sav}>
            <Icon
              name="local-post-office"
              style={styles.Icon}
              size={28}
              color="#95CD41"
            />
            <TextInput
              value={postCode}
              onChangeText={postCode => setPostCode(postCode)}
              style={styles.textinput}
              placeholder="Post Code"
              keyboardType="numeric"
            />
          </SafeAreaView>
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
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#95CD41',
    borderRadius: 10,
    backgroundColor: '#F6FFE8',
  },
  Icon: {flex: 0.1, marginLeft: 10},
  textinput: {
    flex: 0.9,
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
    padding: 10,
  },
  txtContainer: {fontSize: 16, marginTop: 10},
});
