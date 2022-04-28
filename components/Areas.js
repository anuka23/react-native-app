import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CheckBox from '@react-native-community/checkbox';

const Areas = () => {
  const [areas, setAreas] = useState([]);
  const [checked, setChecked] = useState([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
  return (
    <View style={styles.areaContainer}>
      <Text style={styles.areaTitle}>Area</Text>
      <View style={styles.areaListContainer}>
        {areas &&
          areas.length > 0 &&
          areas.map(item => (
            <View style={styles.areaListItem} key={item.id}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.listItem}>{item.name}</Text>
            </View>
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
