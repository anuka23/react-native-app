import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import cover from '../Image/cover.jpg';
import LinearGradient from 'react-native-linear-gradient';

const CitySearch = ({navigation, route}) => {
  const [cities, setCities] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const citySearch = searchValue => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = cities.filter(item => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(cities);
    }
  };

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

  const onPressCity = value => {
    navigation.goBack();

    route.params.searchUpdatedCity(value);
    console.log('cityName', value);
  };

  const onPressCityName = value => {
    navigation.navigate('BusinessSearch', {cityName: value});
  };

  return (
    <View style={styles.citySearchContainer}>
      <Image
        style={StyleSheet.absoluteFillObject}
        source={cover}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['#680101c7', '#000000', '#000000']}
        start={{x: 0.9, y: 0}}
        style={styles.linearGradient}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Search</Text>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search"
              onChange={e => citySearch(e.target.value)}
            />
          </View>
        </View>

        <ScrollView>
          <View style={styles.popularCityContainer}>
            <Text style={styles.title}>Popular Cities</Text>

            <View style={styles.popularCities}>
              {searchInput.length > 0
                ? filteredResults &&
                  filteredResults.length > 0 &&
                  filteredResults.map(item => (
                    <View style={styles.popularCityList} key={item.id}>
                      {item.is_popular == 1 && (
                        <TouchableOpacity
                          style={styles.popularCityListItem}
                          onPress={() => {
                            onPressCity(item.slug);
                            onPressCityName(item.name);
                          }}>
                          {console.log('itme Slug', item.slug)}
                          <Image
                            style={styles.cityImage}
                            source={{
                              uri:
                                'https://staging.admin.haavoo.com/app-images/' +
                                item?.icon,
                            }}
                          />

                          <Text style={styles.cityName}>{item.name}</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  ))
                : cities &&
                  cities.map(item => (
                    <View style={styles.popularCityList} key={item.id}>
                      {item.is_popular == 1 && (
                        <TouchableOpacity
                          style={styles.popularCityListItem}
                          onPress={() => {
                            onPressCity(item.slug);
                            onPressCityName(item.name);
                          }}>
                          <Image
                            style={styles.cityImage}
                            source={{
                              uri:
                                'https://staging.admin.haavoo.com/app-images/' +
                                item?.icon,
                            }}
                          />

                          <Text style={styles.cityName}>{item.name}</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  ))}
            </View>
          </View>

          <View style={styles.OtherCityContainer}>
            <Text style={styles.title}>Other Cities</Text>
            <View style={styles.otherCity}>
              {cities &&
                cities.map(item => (
                  <View style={styles.OtherCityList} key={item.id}>
                    {item.is_popular == 0 && (
                      <TouchableOpacity
                        style={styles.OtherCityListItem}
                        onPress={() => onPressCity(item.slug)}>
                        <Text style={styles.otherCityName}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default CitySearch;

const styles = StyleSheet.create({
  coverImage: {
    height: 600,
    justifyContent: 'center',
  },

  linearGradient: {
    width: '100%',
    height: '100%',
  },
  header: {
    marginVertical: 15,
  },
  citySearchContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  searchContainer: {
    backgroundColor: 'transparent',
    width: '90%',
    height: 50,
    margin: 18,
    marginVertical: 20,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
  },
  input: {
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    paddingHorizontal: 22,
  },
  popularCityContainer: {
    marginTop: 22,
  },
  popularCities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 18,
    marginVertical: 22,
  },

  popularCityListItem: {
    margin: 5,
    width: 100,
    paddingVertical: 20,
    paddingHorizontal: 7,
    height: 150,
    backgroundColor: '#38373792',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
  },
  cityImage: {
    height: 70,
    width: 70,
  },
  cityName: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#fff',
    paddingVertical: 10,
    textAlign: 'center',
  },
  OtherCityContainer: {
    marginVertical: 20,
  },
  OtherCityListItem: {
    marginHorizontal: 18,
    marginVertical: 15,
  },
  otherCityName: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
  },
});
