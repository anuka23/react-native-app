import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CheckBox from '@react-native-community/checkbox';

const Areas = ({searchUpdatedAreas}) => {
  const [areas, setAreas] = useState([]);
  const [checked, setChecked] = useState([]);

  const getAreas = () => {
    axios
      .get(`https://staging.admin.haavoo.com/api/area?city=ernakulam`)
      .then(response => {
        console.log(response);
        setAreas(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAreas();
  }, []);

  const onChecked = id => {
    let temp = areas.map(product => {
      if (id === product.id) {
        return {...product, isChecked: !product.isChecked};
      }
      return product;
    });
    setAreas(temp);
    console.log('temp', temp);
  };

  const searchAreas = value => {
    const currentValue = checked.indexOf(value);
    const newValue = [...checked];

    if (checked.includes(value)) {
      newValue.splice(currentValue, 1);
    } else {
      newValue.push(value);
    }
    setChecked(newValue);
    searchUpdatedAreas(newValue);
  };

  return (
    <View style={styles.areaContainer}>
      <Text style={styles.areaTitle}>Area</Text>
      <View style={styles.areaListContainer}>
        {areas &&
          areas.length > 0 &&
          areas.map(item => (
            <TouchableOpacity style={styles.areaListItem} key={item.id}>
              <CheckBox
                value={item.isChecked}
                onValueChange={() => {
                  onChecked(item.id);
                  searchAreas(item.slug);
                }}
              />
              <Text style={styles.listItem}>{item.name}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default Areas;

const styles = StyleSheet.create({
  areaContainer: {
    margin: 15,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
  },
  areaTitle: {
    backgroundColor: '#61606092',
    fontSize: 20,
    padding: 15,
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  areaListContainer: {
    paddingLeft: 15,
    paddingVertical: 10,
    backgroundColor: '#38373792',
  },
  areaListItem: {
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  listItem: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    paddingHorizontal: 10,
  },
});
