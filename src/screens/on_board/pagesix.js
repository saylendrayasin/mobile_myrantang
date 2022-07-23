import React, {useEffect} from 'react';
import Alamat from './pagefour';
import Pembayaran from './pagefive';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Center} from 'native-base';
const widths = Dimensions.get('window').width;

export default function Checkout({navigation}) {
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

  return (
    <View style={{flex: 1, padding: 10}}>
      <View>
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Checkout</Text>
          <Text style={styles.txtUnderTitle}>Finish your order</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                marginTop: 16,
                flex: 1,
              }}>
              <Icon
                style={{flex: 0.1}}
                name="location-on"
                size={28}
                color="#95CD41"
              />
              <View style={{flex: 1, paddingHorizontal: 5}}>
                <TouchableOpacity style={{marginBottom: 0}}>
                  <Text>Address</Text>
                </TouchableOpacity>
                <Text style={{}}>
                  Jordy Sinaulan | 0812 | Universitas Klabat | Jl. Arnold
                  Mononutu, Airmadidi Bawah, Kec. Airmadidi, Kabupaten Minahasa
                  Utara, Sulawesi Utara 95371
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PageFour')}
              style={{flex: 0.1}}>
              <Icon name="keyboard-arrow-right" size={36} color="#95CD41" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderColor: '#95CD41',
              borderBottomColor: 'black',
              borderWidth: 3,
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginVertical: 4,
            }}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.subTitle}>Transaction Detail</Text>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#95CD41',
              paddingVertical: 10,
              borderRadius: 10,
              marginVertical: 10,
              padding: 10,
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.txt}>Order Number </Text>
              <Text style={styles.txt}>Vegan</Text>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
              <Text style={styles.txt}>MR01</Text>
              <Text style={styles.txt}>Rp. 560.000</Text>
            </View>
          </View>
          <Text style={styles.subTitle}>Promo & Voucher</Text>
          <Text
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              borderColor: '#95CD41',
              marginTop: 10,
            }}>
            Insert promo code
          </Text>
        </View>
        <View>
          <Text style={styles.subTitle}>Payment</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('PageFive')}
            style={{
              marginTop: 10,
              borderColor: '#95CD41',
              flexDirection: 'row',
              borderWidth: 1,
              paddingVertical: 10,
              borderRadius: 10,
              marginVertical: 10,
              padding: 10,
            }}>
            <View style={{flex: 1}}>
              <Text>Visa</Text>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
              <Text>Jordy</Text>
              <Text>5400 1234 3434</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          padding: 10,
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#ededed',
          height: 80,
          border: 20,
          width: widths,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Total Payment
            </Text>
            <Text>Rp. 560.000</Text>
          </View>
          {/* <View style={{flex: 1}}></View> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              flex: 0.3,
              backgroundColor: '#95CD41',
              padding: 10,
              alignItems: 'center',
              justifyContent: 'flex-end',
              borderRadius: 10,
            }}>
            <Text style={{color: '#fff'}}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    fontSize: 14,
  },
  txt: {
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    marginTop: 4,
  },
});
