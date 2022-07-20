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

export default function PageTwo() {
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
    <View>
      <View style={styles.viewTitle}>
        <Text style={styles.txtTitle}>Choose Menu</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
