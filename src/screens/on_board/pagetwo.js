import {ItemClick} from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Penyakit from '../../components/Penyakit';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function PageTwo({navigation}) {
  const [Color, setColor] = useState('#ECECEC');
  const [Condition, setCondition] = useState('');

  const changeColor = () => {
    if (Color == '#78CE34') {
      setColor('#ECECEC');
    } else {
      setColor('#78CE34');
    }
  };

  const [penyakit, setPenyakit] = useState([
    {nama: '+ Jantung'},
    {nama: '+ Maag'},
    {nama: '+ Diabetes'},
    {nama: '+ Darah Tinggi'},
    {nama: '+ Darah Rendah'},
  ]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.viewTitle}>
        <Text style={styles.txtTitle}>Health Check</Text>
        <Text style={styles.txtUnderTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
      </View>
      <View style={styles.viewContent}>
        <Text>My Condition</Text>
        <TextInput
          value={Condition}
          onChangeText={Condition => setCondition(Condition)}
          style={styles.textinputCondition}
          placeholder="Jantung, Mag, Diabetes, etc..."
        />
        <View style={styles.viewItem}>
          <View style={styles.viewHorizontal}>
            <Penyakit disease="+ Jantung" />
            <Penyakit disease="+ Maag" />
            <Penyakit disease="+ Diabetes" />
          </View>
          <View style={styles.viewHorizontal}>
            <Penyakit disease="+ Darah Tinggi" />
            <Penyakit disease="+ Darah Rendah" />
          </View>
          <View style={styles.viewHorizontal}>
            <Penyakit disease="+ Tipes" />
          </View>

          {/* <FlatGrid
            itemDimension={130}
            // maxDimension={150}
            data={penyakit}
            style={styles.gridView}
            spacing={10}
            renderItem={({item}) => (
              <View>
                <Penyakit disease={item.nama} />
              </View>
            )}
          /> */}
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          zIndex: 3,
          left: 25,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.btnBack}
          activeOpacity={0.8}>
          <AntDesign name="left" style={{fontSize: 25, color: '#fff'}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          zIndex: 3,
          right: 25,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PageTree')}
          style={styles.btnNext}
          activeOpacity={0.8}>
          <AntDesign name="right" style={{fontSize: 25, color: '#fff'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#456711',
  },
  gridView: {
    marginTop: 10,
  },
  viewTitle: {
    alignItems: 'center',
  },
  txtTitle: {
    color: '#000',
    fontSize: 34,
    marginTop: 10,
    fontWeight: 'bold',
    elevation: 5,
  },
  txtUnderTitle: {
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  viewContent: {marginTop: 10, padding: 10},
  textinputCondition: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#95CD41',
    borderRadius: 10,
    backgroundColor: '#F6FFE8',
    paddingHorizontal: 10,
  },
  viewItem: {marginTop: 10, paddingLeft: 5},
  viewHorizontal: {flexDirection: 'row', paddingHorizontal: 5, marginTop: 10},
  txtPenyakit: {
    fontSize: 16,
    marginRight: 15,
    padding: 5,
    borderRadius: 10,
  },
});
