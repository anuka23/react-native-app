import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footerStyle}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.text}>Sort</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Filter')}>
        <Text style={styles.text}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerStyle: {
    width: '100%',
    height: 60,
    backgroundColor: '#191919',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  buttonStyle: {
    width: '50%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    fontSize: 20,
    fontFamily: 'OpenSans-Medium',
  },
});
