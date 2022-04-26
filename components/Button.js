import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <View style={styles.tagContainer}>
      <TouchableOpacity style={styles.nameTagContainer}>
        <Text style={styles.text}>Businesses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dealsTagContainer}>
        <Text style={styles.text}>Deals</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  tagContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameTagContainer: {
    width: 156,
    height: 50,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#ff9000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dealsTagContainer: {
    width: 156,
    height: 50,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'OpenSans-Medium',
  },
});
