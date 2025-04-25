import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function HomePage() {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.searchContainer}></View>

      <View style={styles.categoryContainer}></View>

      <View style={styles.productContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryContainer: {
    flex: 1,
    width: '100%',

    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productContainer: {
    flex: 10,
    width: '100%',
    backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
