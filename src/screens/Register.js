import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Button,
  BackHandler,
  TouchableWithoutFeedback,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Zocial';

const Register = ({navigation}) => {
  const [username, changeUsername] = useState('');
  const [email, changeEmail] = useState('');
  const [pass, changePass] = useState('');
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };

  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== '' ? `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}` : '';
  };
  return (
    <View style={styles.headers}>
      <View style={styles.topBack}>
        <ImageBackground
          source={require('../image/LoginBack.png')}
          style={styles.imgBack}
          resizeMode="cover">
          <View style={styles.viewMyRantang}>
            <Text style={styles.txtMy}>My</Text>
            <Text style={styles.txtRantang}>Rantang</Text>
          </View>
          <View style={styles.viewTxt}>
            <Text style={styles.txtFirst}>Selamat Datang...</Text>
            <Text style={styles.txtFirst}>Selamat Belanja</Text>
          </View>
        </ImageBackground>
      </View>

      <ScrollView style={styles.botBack}>
        <View style={styles.viewTxtWelcome}>
          <Text style={styles.txtSecond}>Welcome</Text>
          <Text style={styles.txtSecond}>Back</Text>
        </View>

        <View style={styles.viewTextInput}>
          <Text style={styles.txtRegis}>Register</Text>
          <SafeAreaView style={styles.sav}>
            <Icon
              name="user-ninja"
              style={styles.Icons}
              size={28}
              color="#95CD41"
            />

            <TextInput
              value={username}
              onChangeText={changeUsername}
              placeholder="Username"
            />
          </SafeAreaView>

          <SafeAreaView style={styles.sav}>
            <Icons
              name="email"
              style={styles.Icons}
              size={27}
              color="#95CD41"
            />

            <TextInput
              value={email}
              onChangeText={changeEmail}
              placeholder="Email"
            />
          </SafeAreaView>

          <SafeAreaView style={styles.sav}>
            <Icon name="lock" style={styles.Icons} size={28} color="#95CD41" />

            <TextInput
              value={pass}
              onChangeText={changePass}
              placeholder="Password"
              secureTextEntry={true}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.sav}>
            <Icon
              name="calendar-alt"
              style={styles.Icons}
              size={28}
              color="#95CD41"
            />

            <TextInput
              value={getDate()}
              placeholder="Date"
              style={{flex: 0.9}}
              keyboardType=""
            />

            <TouchableOpacity
              onPress={showDatePicker}
              style={{justifyContent: 'center', flex: 0.2, marginRight: 10}}>
              <Text>Set Date</Text>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        <View style={styles.viewBtnGetStarted}>
          <TouchableOpacity style={styles.btnGetStarted}>
            <Text style={styles.TxtGetStarted}>Get Started</Text>
          </TouchableOpacity>
          <View style={styles.viewSignUp}>
            <Text>Have an account? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.txtSignUp}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    flex: 1,
    backgroundColor: 'black',
  },
  topBack: {
    flex: 0.4,
  },
  botBack: {
    flex: 0.6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    padding: 14,
  },
  imgBack: {
    flex: 1,
    padding: 14,
  },
  txtMy: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  txtRantang: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#95CD41',
  },
  viewMyRantang: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  viewTxt: {
    flex: 1,
    marginTop: 10,
  },
  txtFirst: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  txtSecond: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  viewTxtWelcome: {
    flex: 0.2,
  },
  viewTextInput: {
    flex: 0.6,
    justifyContent: 'flex-start',
  },

  viewBtnGetStarted: {
    flex: 0.4,
    justifyContent: 'flex-end',
    marginTop: 20,
    alignItems: 'center',
  },
  txtRegis: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#95CD41',
  },
  sav: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#95CD41',
    borderRadius: 10,
    backgroundColor: '#F6FFE8',
  },
  Icons: {flex: 0.1, marginLeft: 10},
  textInputDate: {},
  btnGetStarted: {
    width: 250,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#95CD41',
  },
  TxtGetStarted: {
    color: 'white',
    fontSize: 18,
  },
  viewSignUp: {
    flexDirection: 'row',
    marginTop: 10,
  },
  txtSignUp: {
    color: '#95CD41',
  },
});

export default Register;
