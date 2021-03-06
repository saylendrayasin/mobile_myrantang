import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

function Line() {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 4,
      }}
    />
  );
}

export default function CardItem(props) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(-1);

  function renderDropdown(props) {
    return (
      <View style={styles.dropdownContainer}>
        <View style={styles.dropdownTable}>
          <Text style={styles.menuTitle}>Menu</Text>
          <View style={styles.rowContainer}>
            <Text>Nasi</Text>
            <Text>300g(30cal)</Text>
          </View>
          <Line />
          <View style={styles.rowContainer}>
            <Text>Kangkung Tumis</Text>
            <Text>400g(40cal)</Text>
          </View>
          <Line />
          <View style={styles.rowContainer}>
            <Text>Pudding</Text>
            <Text>100g(10cal)</Text>
          </View>
          <Line />
          <View style={styles.rowContainer}>
            <Text>Teh</Text>
            <Text>40g(4cal)</Text>
          </View>
        </View>
        <View>
          <Line />
          <View style={styles.rowContainer}>
            <Text>18, January 2022</Text>
            <View>
              <Text style={{fontSize: 12}}>Total calories</Text>
              <Text style={{textAlign: 'right'}}>84</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          setOpen(!open);
        }}>
        <View>
          <Text style={styles.cardTitle}>Vegan</Text>
          <Text style={styles.cardMealTime}>{props.mealTime}</Text>
        </View>
        <Text style={styles.cardDetails}>Click for details</Text>
        <Image
          source={require('../image/cardImg.png')}
          style={styles.cardImg}
        />
        <Image
          source={require('../image/Ellipse6.png')}
          style={styles.cardBg}
        />
      </TouchableOpacity>
      {/* Dropdown */}
      {open && renderDropdown()}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#95CD41',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    height: 100,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardMealTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#456711',
  },
  cardDetails: {
    fontSize: 12,
    color: '#456711',
  },
  cardImg: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  cardBg: {
    position: 'absolute',
    bottom: -20,
    right: -20,
    zIndex: -1,
  },
  dropdownTable: {
    marginTop: -10,
    paddingTop: 20,
    paddingBottom: 40,
  },
  dropdownContainer: {
    zIndex: -1,
    backgroundColor: '#fff',
    marginTop: -10,
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#456711',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
