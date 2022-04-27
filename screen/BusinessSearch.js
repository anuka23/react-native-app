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
import axios from 'axios';
import cover from '../Image/cover.jpg';
import LinearGradient from 'react-native-linear-gradient';

const BusinessSearch = ({navigation}) => {
  const [businesses, setBusinesses] = useState([]);

  const getBusiness = () => {
    axios
      .get(
        'https://staging.admin.haavoo.com/api/business?city=&area=&search_query=&page=1&type=&category=&sort=&lat=19.1135744&lng=72.8956928',
      )
      .then(response => {
        setBusinesses(response?.data?.data?.data);
      });
  };

  useEffect(() => getBusiness(), []);

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
            onPress={() => navigation.navigate('CitySearch')}>
            <Text style={styles.cityName}> EarnaKulam</Text>
          </TouchableOpacity>
        </View>
        <Header />
        <Button />
        <View style={styles.businessListContainer}>
          <FlatList
            style={styles.listStyle}
            data={businesses}
            renderItem={({item}) => (
              <View style={styles.businessListItems}>
                <View style={styles.businessList}>
                  <Image
                    source={{
                      uri:
                        'https://staging.admin.haavoo.com/app-images/' +
                        item?.medias[0]?.path,
                    }}
                    style={styles.businessImage}
                  />
                </View>
                <View style={styles.businessInfo}>
                  <Text style={styles.businessInfoTitle}>
                    {item?.business_name}
                  </Text>
                  <Text style={styles.businessInfoCategory}>
                    Category : {item?.categories[0]?.name}
                  </Text>
                  <Text style={styles.businessInfoArea}>
                    Area : {item?.areas[0]?.name}
                  </Text>

                  <Text style={styles.businessInfoDesc}>
                    {/* {item?.description} */}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
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
  listStyle: {
    display: 'flex',
    overflow: 'hidden',
  },
  businessListContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 300,
    flexGrow: 1,
    marginTop: 10,
  },
  businessListItems: {
    width: 320,
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
    backgroundColor: '#61606047',
    borderRadius: 15,
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
    height: 100,
    width: '50%',
    marginHorizontal: 12,
  },
  businessInfoTitle: {
    color: '#fff',
    fontFamily: 'OpenSans-Medium',
  },
  businessInfoCategory: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 12,
  },
  businessInfoArea: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 12,
  },
});
