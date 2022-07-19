import React from 'react';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import Card from './Card';

export default function CardItem() {
  const {width} = Dimensions.get('window');

  return (
    <ScrollView
      decelerationRate={0}
      snapToInterval={320}
      snapToAlignment={'center'}
      style={styles.container}
      horizontal={true}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}>
      <Card day="Senin" />
      <Card day="Selasa" />
      <Card day="Rabu" />
      <Card day="Kamis" />
      <Card day="Jumat" />
      <Card day="Sabtu" />
      <Card day="Minggu" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'scroll',
  },
});
