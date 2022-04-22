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
      <Text style={styles.title}>Search</Text>
      <Text style={styles.cityContainer}>EarnaKulam</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <TouchableOpacity style={styles.tagContainer}>Business</TouchableOpacity>
      <TouchableOpacity style={styles.tagContainer}>Deals</TouchableOpacity>
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
  title: {
    marginBottom: 10,
    fontSize: 22,
  },
  cityContainer: {
    fontSize: 22,
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
  tagContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    borderRadius: 40,
    backgroundColor: 'transparent',
  },
});
