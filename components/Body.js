import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import img1 from '../Image/img1.jpeg';
import img2 from '../Image/img2.jpg';
import img3 from '../Image/img3.jpg';
import img4 from '../Image/img4.jpg';
import img5 from '../Image/img5.jpeg';

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <ScrollView style={styles.businessListContainer}>
        <View style={styles.businessListItems}>
          <View style={styles.businessList}>
            <Image source={img1} style={styles.businessImage} />
          </View>
          <View style={styles.businessInfo}>
            <Text style={styles.businessInfoTitle}>ADNOX Gents wear</Text>
            <Text style={styles.businessInfoCategory}>Category</Text>
            <Text style={styles.businessInfoArea}>Area</Text>
            <Text style={styles.businessInfoDesc}>Description</Text>
          </View>
        </View>

        <View style={styles.businessListItems}>
          <View style={styles.businessList}>
            <Image source={img2} style={styles.businessImage} />
          </View>
          <View style={styles.businessInfo}>
            <Text style={styles.businessInfoTitle}>Kairali Paints</Text>
            <Text style={styles.businessInfoCategory}>Category</Text>
            <Text style={styles.businessInfoArea}>Area</Text>
            <Text style={styles.businessInfoDesc}>Description</Text>
          </View>
        </View>

        <View style={styles.businessListItems}>
          <View style={styles.businessList}>
            <Image source={img3} style={styles.businessImage} />
          </View>
          <View style={styles.businessInfo}>
            <Text style={styles.businessInfoTitle}>Bata</Text>
            <Text style={styles.businessInfoCategory}>Category</Text>
            <Text style={styles.businessInfoArea}>Area</Text>
            <Text style={styles.businessInfoDesc}>Description</Text>
          </View>
        </View>

        <View style={styles.businessListItems}>
          <View style={styles.businessList}>
            <Image source={img4} style={styles.businessImage} />
          </View>
          <View style={styles.businessInfo}>
            <Text style={styles.businessInfoTitle}>MENZ CLUB</Text>
            <Text style={styles.businessInfoCategory}>Category</Text>
            <Text style={styles.businessInfoArea}>Area</Text>
            <Text style={styles.businessInfoDesc}>Description</Text>
          </View>
        </View>

        <View style={styles.businessListItems}>
          <View style={styles.businessList}>
            <Image source={img5} style={styles.businessImage} />
          </View>
          <View style={styles.businessInfo}>
            <Text style={styles.businessInfoTitle}>ORGIN</Text>
            <Text style={styles.businessInfoCategory}>Category</Text>
            <Text style={styles.businessInfoArea}>Area</Text>
            <Text style={styles.businessInfoDesc}>Description</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  bodyContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  businessListContainer: {
    display: 'flex',
    width: '90%',
    height: '100%',
    marginTop: 10,
    overflow: 'hidden',
  },
  businessListItems: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    marginVertical: 8,
    backgroundColor: '#242526',
    opacity: 0.7,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
  },
  businessImage: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  businessInfo: {
    marginHorizontal: 15,
  },
  businessInfoTitle: {
    color: '#fff',
  },
});
