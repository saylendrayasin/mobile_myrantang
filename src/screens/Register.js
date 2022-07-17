import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';

import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      date: '',
    };
  }

  render() {
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
            <Text style={styles.txtLogin}>Register</Text>
            <SafeAreaView style={{flex: 1, marginTop: 10}}>
              <TextInput
                value={this.state.username}
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: '#95CD41',
                  borderRadius: 10,
                  backgroundColor: '#F6FFE8',
                  padding: 10,
                }}
                onChangeText={value => this.setState({username: value})}
                placeholder="Username"
              />
            </SafeAreaView>
            <SafeAreaView style={{flex: 1, marginTop: 10}}>
              <TextInput
                value={this.state.email}
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: '#95CD41',
                  borderRadius: 10,
                  backgroundColor: '#F6FFE8',
                  padding: 10,
                }}
                onChangeText={value => this.setState({email: value})}
                placeholder="Email"
              />
            </SafeAreaView>
            <SafeAreaView style={{flex: 1, marginTop: 10}}>
              <TextInput
                value={this.state.password}
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: '#95CD41',
                  borderRadius: 10,
                  backgroundColor: '#F6FFE8',
                  padding: 10,
                }}
                onChangeText={value => this.setState({password: value})}
                placeholder="Password"
                secureTextEntry={true}
              />
            </SafeAreaView>
          </View>

          <View style={styles.viewBtnGetStarted}>
            <TouchableOpacity style={styles.btnGetStarted}>
              <Text style={styles.TxtGetStarted}>Get Started</Text>
            </TouchableOpacity>
            <View style={styles.viewSignUp}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.txtSignUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
  txtLogin: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#95CD41',
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

export default Register;
