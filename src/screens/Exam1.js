import React, {Component} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

// import Carousel from 'react-native-snap-carousel';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import Crs from '../components/Carousel';

class Exam extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.headers}>
        <Text>Hello</Text>
        <Crs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headers: {
    padding: 0,
    flex: 1,
  },
});

export default Exam;
