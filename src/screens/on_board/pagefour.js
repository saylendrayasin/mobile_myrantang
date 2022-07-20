import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function PageFour() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addres, setAddres] = useState('');
  const [postCode, setPostCode] = useState('');
  const [detailAdress, setdetailAdress] = useState('');
  return (
    <ScrollView>
      <View style={styles.viewTitle}>
        <Text style={styles.txtTitle}>Health Check</Text>
        <Text style={styles.txtUnderTitle}>lorem ipsum dolor</Text>
      </View>
      <View style={styles.viewContent}>
        <Text style={styles.txtContainer}>Example</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          style={styles.textinputPN_PC_L}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
        <TextInput
          value={addres}
          onChangeText={addres => setAddres(addres)}
          style={styles.textinputAddress}
          placeholder="Address"
        />
        <TextInput
          value={postCode}
          onChangeText={postCode => setPostCode(postCode)}
          style={styles.textinputPN_PC_L}
          placeholder="Post Code"
        />
        <TextInput
          value={detailAdress}
          onChangeText={detailAdress => setdetailAdress(detailAdress)}
          style={styles.textinputPN_PC_L}
          placeholder="Location"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 20,
  },
  viewContent: {padding: 10},
  txtContainer: {fontSize: 16},
  textinputPN_PC_L: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#95CD41',
    borderRadius: 10,
    backgroundColor: '#F6FFE8',
    padding: 10,
  },
  textinputAddress: {
    height: 100,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#95CD41',
    borderRadius: 10,
    backgroundColor: '#F6FFE8',
    padding: 10,
  },
});
