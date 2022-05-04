import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import searchIcon from '../Image/search.png';
import React, {useState} from 'react';

const Header = ({searchUpdatedInput}) => {
  const [search, setSearch] = useState('');

  const searchBuisnesses = () => {
    searchUpdatedInput(search);
  };

  console.log('searchValue', search);
  return (
    <View style={styles.headerStyle}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={text => setSearch(text)}
          value={search}
        />
        <TouchableOpacity
          onPress={() => {
            searchBuisnesses();
          }}>
          <Image style={styles.searchIcon} source={searchIcon} />
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
    paddingHorizontal: 20,
    width: '80%',
  },
  searchIcon: {
    height: 35,
    width: 35,
    marginRight: 10,
  },
});
