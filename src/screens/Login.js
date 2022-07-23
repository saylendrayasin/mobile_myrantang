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
  BackHandler,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation}) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const [username, changeUsername] = useState('');
  const [pass, changePass] = useState('');
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
            <Text style={styles.txtFirst}>Your Healthy Menu</Text>
          </View>
        </ImageBackground>
      </View>

      <ScrollView style={styles.botBack}>
        <View style={styles.viewTxtWelcome}>
          <Text style={styles.txtSecond}>Welcome</Text>
          <Text style={styles.txtSecond}>Back</Text>
        </View>

        <View style={styles.viewTextInput}>
          <Text style={styles.txtLogin}>Login</Text>
          <SafeAreaView style={styles.sav}>
            <Icon
              name="user-alt"
              style={styles.iconUser}
              size={26}
              color="#95CD41"
            />
            <TextInput
              value={username}
              onChangeText={changeUsername}
              style={styles.textinputEmail}
              placeholder="Username"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.sav}>
            <Icon
              name="lock"
              style={styles.iconPass}
              size={27}
              color="#95CD41"
            />
            <TextInput
              value={pass}
              onChangeText={changePass}
              style={styles.textinputPass}
              placeholder="Password"
              secureTextEntry={true}
            />
          </SafeAreaView>
        </View>

        <View style={styles.viewBtnGetStarted}>
          <TouchableOpacity
            style={styles.btnGetStarted}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.TxtGetStarted}>Login</Text>
          </TouchableOpacity>
          <View style={styles.viewSignUp}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.txtSignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

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
    flex: 0.3,
  },
  viewTextInput: {
    flex: 0.4,
    justifyContent: 'flex-start',
    marginTop: 20,
  },

  viewBtnGetStarted: {
    flex: 0.4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLogin: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#95CD41',
  },
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
  iconUser: {flex: 0.1, marginLeft: 10},
  textinputEmail: {
    flex: 0.9,
  },
  iconPass: {flex: 0.1, marginLeft: 10},
  textinputPass: {
    flex: 0.9,
  },
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
