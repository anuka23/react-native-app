import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Deals = () => {
  return (
    <View style={styles.dealsStyle}>
      <Text style={styles.text}>Sorry, no deals found</Text>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  dealsStyle: {
    width: '100%',
    height: 445,
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
  },
});
