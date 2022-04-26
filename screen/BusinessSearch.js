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
import CitySearch from './CitySearch';

const BusinessSearch = () => {
  const [businesses, setBusinesses] = useState([]);
  const [cityOpen, setCityOpen] = useState(false);

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
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Search</Text>
        <TouchableOpacity
          style={styles.cityContainer}
          cityOpen={cityOpen}
          onPress={() => setCityOpen(!cityOpen)}>
          <Text style={styles.cityName}> EarnaKulam</Text>
          {cityOpen && (
            <CitySearch cityOpen={cityOpen} setCityOpen={setCityOpen} />
          )}
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
    fontFamily: 'OpenSans-Regular',
  },
  cityName: {
    fontSize: 22,
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
    backgroundColor: '#242526',
    opacity: 0.7,
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
    height: 'auto',
    width: '50%',
    marginHorizontal: 12,
  },
  businessInfoTitle: {
    color: '#fff',
    fontFamily: 'OpenSans-Medium',
    flexShrink: 1,
  },
  businessInfoCategory: {
    fontFamily: 'OpenSans-Medium',
    flexShrink: 1,
  },
  businessInfoArea: {
    fontFamily: 'OpenSans-Medium',
    flexShrink: 1,
  },
});
