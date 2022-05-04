import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import close from '../Image/close.png';

const Footer = () => {
  const [modal, setModal] = useState(false);
  const [referenceCheckBox, setReferenceCheckBox] = useState(false);
  const [popularityCheckBox, setPopularityCheckBox] = useState(false);
  const [distanceCheckBox, setDistanceCheckBox] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.footerStyle}>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModal(false)}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
          <View style={styles.listItem}>
            <Text style={styles.text}>Reference</Text>
            <CheckBox
              value={referenceCheckBox}
              onValueChange={setReferenceCheckBox}
            />
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>Popularity</Text>
            <CheckBox
              value={popularityCheckBox}
              onValueChange={setPopularityCheckBox}
            />
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>Distance</Text>
            <CheckBox
              value={distanceCheckBox}
              onValueChange={setDistanceCheckBox}
            />
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setModal(true)}>
        <Text style={styles.text}>Sort</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Filter')}>
        <Text style={styles.text}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerStyle: {
    width: '100%',
    height: 60,
    backgroundColor: '#191919',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  buttonStyle: {
    width: '50%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    fontSize: 20,
    fontFamily: 'OpenSans-Medium',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: '100%',

    paddingBottom: 30,
  },
  closeIcon: {
    height: 30,
    width: 30,
  },
  listItem: {
    width: '100%',
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    paddingVertical: 20,
  },
});
