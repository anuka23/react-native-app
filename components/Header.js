import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import search from '../Image/search.png';
import React from 'react';

const Header = ({searchUpdatedInput}) => {
  var searchValue;

  const setSearch = value => {
    searchValue = value;
  };

  const searchBuisnesses = () => {
    searchUpdatedInput(searchValue);
  };
  return (
    <View style={styles.headerStyle}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            searchBuisnesses();
          }}>
          <Image style={styles.searchIcon} source={search} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchContainer: {
    backgroundColor: 'transparent',
    width: '90%',
    height: 50,
    margin: 10,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    paddingHorizontal: 30,
  },
  searchIcon: {
    height: 35,
    width: 35,
    marginRight: 10,
  },
});
