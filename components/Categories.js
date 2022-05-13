import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import arrow from '../Image/down-arrow.png';

const Categories = ({searchUpdatedCategories}) => {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);

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
  }, []);

  const onChecked = id => {
    let temp = categories.map(product => {
      if (id === product.id) {
        return {...product, isChecked: !product.isChecked};
      }
      return product;
    });
    setCategories(temp);
    console.log('temp', temp);
  };

  const searchCategories = value => {
    const currentValue = checked.indexOf(value);
    const newValue = [...checked];

    if (checked.includes(value)) {
      newValue.splice(currentValue, 1);
    } else {
      newValue.push(value);
    }
    setChecked(newValue);
    searchUpdatedCategories(newValue);
  };

  console.log('categories', checked);

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>Categories</Text>
      <View style={styles.categoryListContainer}>
        {categories &&
          categories.map(item => {
            return (
              <TouchableOpacity style={styles.categoryListItem} key={item.id}>
                <View style={styles.checkboxStyle}>
                  <CheckBox
                    value={item.isChecked}
                    onChange={() => {
                      onChecked(item.id);
                      searchCategories(item.slug);
                    }}
                  />
                  <Text style={styles.listItem}>{item.name}</Text>
                </View>
                <View style={styles.image}>
                  <Image style={styles.arrowIcon} source={arrow} />
                </View>
              </TouchableOpacity>
            );
          })}
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
    width: '100%',
    paddingLeft: 15,
    paddingVertical: 10,
  },
  categoryListItem: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  listItem: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  checkboxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    paddingRight: 20,
  },
  arrowIcon: {
    height: 30,
    width: 30,
    justifyContent: 'flex-end',
  },
});
