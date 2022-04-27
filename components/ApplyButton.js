import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ApplyButton = () => {
  return (
    <View style={styles.applyButtonContainer}>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplyButton;

const styles = StyleSheet.create({
  applyButtonContainer: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  applyButton: {
    width: '90%',
    backgroundColor: '#ff9000',
    borderRadius: 50,
  },
  applyButtonText: {
    textAlign: 'center',
    fontSize: 24,
    padding: 15,
    fontFamily: 'OpenSans-Regular',
  },
});
