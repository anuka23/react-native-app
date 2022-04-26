import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import React from 'react';
import arrow from '../Image/down-arrow.png';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Search" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchContainer: {
    backgroundColor: 'transparent',
    width: '90%',
    height: 50,
    margin: 10,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
  },
  input: {
    paddingHorizontal: 30,
  },
});
