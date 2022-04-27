/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import BusinessSearch from './screen/BusinessSearch';
import CitySearch from './screen/CitySearch';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Filter from './screen/Filter';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Search"
          component={BusinessSearch}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CitySearch"
          component={CitySearch}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Filter"
          component={Filter}
        />
        {/* <Stack.Screen name="Footer" component={Footer} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
