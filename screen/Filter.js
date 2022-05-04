import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import cover from '../Image/cover.jpg';
import LinearGradient from 'react-native-linear-gradient';
import Categories from '../components/Categories';
import Areas from '../components/Areas';
import ApplyButton from '../components/ApplyButton';

const Filter = ({navigation}) => {
  const searchCategories = value => {
    setSearchCategories(value);
  };
  return (
    <View style={styles.filterContainer}>
      <Image
        style={StyleSheet.absoluteFillObject}
        source={cover}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['#680101e8', '#000000c2', '#000000', '#000000']}
        start={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <Text style={styles.filterTitle}>Filter</Text>
        <ScrollView>
          <View style={styles.typeBusiness}>
            <Text style={styles.title}>Type Business</Text>
            <View style={styles.typeBusinessContainer}>
              <TouchableOpacity
                style={styles.typeBusinessButton}
                onPress={() => navigation.goBack()}>
                <Text style={styles.text}>Individual</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.typeBusinessButton}
                onPress={() => navigation.goBack()}>
                <Text>Shop/Office</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Categories />
          <Areas />
        </ScrollView>
        <ApplyButton />
      </LinearGradient>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  coverImage: {
    height: 600,
    justifyContent: 'center',
    alignContent: 'center',
  },

  linearGradient: {
    width: '100%',
    height: '100%',
  },
  filterContainer: {
    width: '100%',
    height: '100%',
  },
  filterTitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    margin: 20,
    fontFamily: 'OpenSans-Regular',
  },
  typeBusiness: {
    borderWidth: 1,
    backgroundColor: '#38373773',
    borderColor: 'grey',
    borderRadius: 15,
    margin: 10,
  },
  title: {
    margin: 15,
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    color: '#fff',
  },
  typeBusinessContainer: {
    marginHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
  },
  typeBusinessButton: {
    marginRight: 10,
    backgroundColor: '#242526',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
  filterComponents: {
    height: 475,
  },
});
