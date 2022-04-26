import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import SectionList from 'react-native/Libraries/Lists/SectionList';

const CitySearch = ({cityOpen, setCityOpen}) => {
  const [cities, setCities] = useState([]);

  const getCity = () => {
    axios
      .get('https://staging.admin.haavoo.com/api/city')
      .then(response => {
        console.log(response);
        setCities(response?.data?.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => getCity(), []);

  const renderPopularCity = ({item}) => {
    return (
      <View style={styles.popularCityList}>
        {item.is_popular == 1 && (
          <View style={styles.popularCityListItem}>
            <View style={styles.cityImage}>
              <Image
                source={{
                  uri:
                    'https://staging.admin.haavoo.com/app-images/' + item.icon,
                }}
              />
            </View>
            <View style={styles.cityName}>
              <Text>{item.name}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  const renderOtherCity = ({item}) => {
    return (
      <View style={styles.popularCityList}>
        {item.is_popular == 0 && (
          <View style={styles.otherCityListItem}>
            <View style={styles.cityName}>
              <Text>{item.name}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.citySearchContainer}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Search</Text>
        </View>
        <View>
          <Header />
        </View>
      </View>

      <View style={styles.popularCityContainer}>
        <Text style={styles.title}>Poupular Cities</Text>
        {/* <SectionList
          section={[
            {title: 'Popular Cities', data: cities},
            {title: 'Other Cities', data: cities},
          ]}
          keyExtractor={item => item.id}
          renderSectionHeader={({section}) => (
            <Text style={styles.title}>{section.title}</Text>
          )}
          renderItem={renderPopularCity}
          onPre
        /> */}
        <FlatList
          data={cities}
          keyExtractor={item => item.id}
          renderItem={renderPopularCity}
          onPre
        />
      </View>
      <View style={styles.popularCityContainer}>
        <Text style={styles.title}>Popular Cities</Text>
        <View style={styles.popularCityList}>
          {cities.is_popular == 1 && (
            <View style={styles.popularCityListItem}>
              <View style={styles.cityImage}>
                <Image
                  source={{
                    uri:
                      'https://staging.admin.haavoo.com/app-images/' +
                      item.icon,
                  }}
                />
              </View>
              <View style={styles.cityName}>
                <Text>{item.name}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CitySearch;

const styles = StyleSheet.create({
  citySearchContainer: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
  popularCityContainer: {
    height: '100%',
  },
  popularCityList: {
    width: '100%',
  },
  popularCityListItem: {
    width: 100,
    height: 150,
    backgroundColor: '#242526',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
