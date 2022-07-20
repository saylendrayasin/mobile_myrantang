import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Penyakit(props) {
  const [Color, setColor] = useState('#ECECEC');

  const changeColor = () => {
    if (Color == '#78CE34') {
      setColor('#ECECEC');
    } else {
      setColor('#78CE34');
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={changeColor}>
        <Text style={[styles.txtPenyakit, {backgroundColor: Color}]}>
          {props.disease}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  txtPenyakit: {
    fontSize: 16,
    marginRight: 15,
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
  },
});
