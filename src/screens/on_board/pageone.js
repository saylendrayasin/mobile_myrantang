import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function OnBoardOne({navigation}) {
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
  return (
    <View style={styles.headers}>
      <View style={{flex: 1, zIndex: 3, alignItems: 'center', marginTop: 10}}>
        <Text style={styles.txtHeaderAts}>lorem Ipsun Dolor</Text>
        <Text style={styles.txtHeaderBwh}>Rantang</Text>
      </View>
      <View style={styles.viewimgTopRightAts}>
        <Image source={require('../../image/SplashTopRightAts.png')} />
      </View>
      <View style={styles.viewimgTopRightBwh}>
        <Image source={require('../../image/SplashTopRightBwh.png')} />
      </View>
      <View style={styles.viewimgCenAts}>
        <Image
          source={require('../../image/ImgBundaranMakanan.png')}
          style={styles.imgCenAts}
        />
      </View>
      <View style={styles.viewimgCenBwh}>
        <Image
          source={require('../../image/ImgMakananBundar.png')}
          style={styles.imgCenBwh}
        />
      </View>
      <View style={styles.viewtxtFooter}>
        <Text style={styles.txtFooterAts}>My</Text>
        <Text style={styles.txtFooterBwh}>Rantang</Text>
      </View>
      <View style={styles.viewimgBotLeftAts}>
        <Image source={require('../../image/SplashBotLeftAts.png')} />
      </View>
      <View style={styles.viewimgBotLeftBwh}>
        <Image source={require('../../image/SplashBotLeftBwh.png')} />
      </View>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 25,
          zIndex: 3,
          right: 25,
        }}>
        <TouchableOpacity
          style={styles.btnNext}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('PageTwo')}>
          <AntDesign name="right" style={{fontSize: 25, color: '#fff'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnNext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#456711',
  },
  headers: {
    flex: 1,
    backgroundColor: '#95CD41',
  },
  viewtxtHeader: {
    flex: 1,
    zIndex: 3,
    alignItems: 'center',
  },
  txtHeaderAts: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
  txtHeaderBwh: {fontSize: 40, fontWeight: 'bold', color: 'white'},
  viewimgTopRightAts: {
    flex: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
  },
  viewimgTopRightBwh: {
    flex: 1,
    position: 'absolute',
    right: -20,
    top: 80,
    zIndex: 1,
  },
  viewimgBotLeftAts: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 2,
  },
  viewimgCenAts: {
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    top: 150,
    left: 60,
  },
  viewimgCenBwh: {
    flex: 1,
    position: 'absolute',
    zIndex: 3,
    top: 170,
    left: 80,
  },
  imgCenAts: {width: 300, height: 300},
  imgCenBwh: {width: 260, height: 260},
  viewimgBotLeftBwh: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 1,
  },
  viewtxtFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 3,
  },

  txtFooterAts: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  txtFooterBwh: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default OnBoardOne;
