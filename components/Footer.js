import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.footerStyle}>
      <Text>Sort</Text>
      <Text>Filter</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerStyle: {
    backgroundColor: '#191919',
    justifyContent: 'space-between',
  },
});
