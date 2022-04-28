import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useStoreState, useStoreActions} from 'easy-peasy';

const BusinessList = ({updatedValue}) => {
  const businesses = useStoreState(state => state.list);
  const fetchBusinesses = useStoreActions(actions => actions.fetchBusinesses);

  useEffect(() => {
    fetchBusinesses(updatedValue);
  }, [updatedValue]);

  return (
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
  );
};

export default BusinessList;

const styles = StyleSheet.create({
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
    backgroundColor: '#61606047',
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
    height: 100,
    width: '50%',
    marginHorizontal: 12,
  },
  businessInfoTitle: {
    color: '#fff',
    fontFamily: 'OpenSans-Medium',
  },
  businessInfoCategory: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 12,
  },
  businessInfoArea: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 12,
  },
});
