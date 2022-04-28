import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const Categories = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const getCategory = () => {
    axios
      .get('https://staging.admin.haavoo.com/api/category')
      .then(response => {
        console.log(response);
        setCategories(response?.data?.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCategory();
  });

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>Categories</Text>
      <View style={styles.categoryListContainer}>
        {categories &&
          categories.length > 0 &&
          categories.map(item => (
            <View style={styles.categoryListItem} key={item.id}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                tintColors={{true: '#ff9000', false: '#fff'}}
              />
              <Text style={styles.listItem}>{item.name}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryContainer: {
    margin: 15,
    borderWidth: 1,
    backgroundColor: '#61606047',
    borderColor: 'grey',
    borderRadius: 15,
  },
  categoryTitle: {
    padding: 15,
    color: '#fff',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
    backgroundColor: '#61606092',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  categoryListContainer: {
    paddingLeft: 15,
    paddingVertical: 10,
  },
  categoryListItem: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  listItem: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    paddingHorizontal: 10,
  },
});
