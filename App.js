/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cover from './Image/cover.jpg';

import LinearGradient from 'react-native-linear-gradient';
import BusinessSearch from './screen/BusinessSearch';
import CitySearch from './screen/CitySearch';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={StyleSheet.absoluteFillObject}
        source={cover}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['#2F0909', '#000000', '#000000']}
        start={{x: 0.5, y: 0.1}}
        style={styles.linearGradient}>
        <BusinessSearch />
        {/* <CitySearch /> */}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'OpenSans-Regular',
  },
  coverImage: {
    height: 600,
    justifyContent: 'center',
  },

  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
});

export default App;
