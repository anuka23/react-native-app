import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import arrow from '../Image/down-arrow.png';
import cover from '../Image/cover.jpg';
import LinearGradient from 'react-native-linear-gradient';
import BusinessList from '../components/BusinessList';

const BusinessSearch = ({navigation}) => {
  const [updatedValue, setUpdatedValue] = useState([
    {
      categories: [''],
      areas: [''],
      sort: [''],
      search_query: '',
      type: [''],
      page: [],
      city: '',
    },
  ]);

  const searchUpdatedInput = value => {
    const updatedValueNew = {...updatedValue};
    updatedValueNew.search_query = value;
    setUpdatedValue(updatedValueNew);
  };

  const searchUpdatedCity = value => {
    const updatedValueNew = {...updatedValue};
    updatedValueNew.city = value;
    setUpdatedValue(updatedValueNew);
  };

  return (
    <View style={styles.businessStyle}>
      <Image
        style={StyleSheet.absoluteFillObject}
        source={cover}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['#680101e8', '#000000c2', '#000000', '#000000']}
        start={{x: 0.5, y: 0}}
        style={styles.linearGradient}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Search</Text>
          <TouchableOpacity
            style={styles.cityContainer}
            onPress={() => navigation.navigate('CitySearch')}
            searchUpdatedCity={searchUpdatedCity}>
            <Text style={styles.cityName}> EarnaKulam</Text>
            <Image style={styles.arrowIcon} source={arrow} />
          </TouchableOpacity>
        </View>
        <Header searchUpdatedInput={searchUpdatedInput} />
        <Button />
        <BusinessList updatedValue={updatedValue} />
        <Footer />
      </LinearGradient>
    </View>
  );
};

export default BusinessSearch;

const styles = StyleSheet.create({
  businessStyle: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'OpenSans-Regular',
    zIndex: 1,
    position: 'relative',
  },

  coverImage: {
    height: 600,
    justifyContent: 'center',
  },

  linearGradient: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    height: 30,
    width: 30,
  },
  title: {
    marginBottom: 10,
    fontSize: 22,
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },
  cityName: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },
  components: {
    height: '100%',
  },
});
