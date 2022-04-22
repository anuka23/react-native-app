/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BusinessSearch from './screen/BusinessSearch';

const App = () => {
  return (
    <View style={styles.container}>
      <BusinessSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
