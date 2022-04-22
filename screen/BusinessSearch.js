import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Body from '../components/Body';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cover from '../Image/cover.jpg';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BusinessSearch = () => {
  return (
    <View style={styles.businessStyle}>
      <ImageBackground
        style={styles.coverImage}
        source={cover}
        resizeMode="cover"></ImageBackground>
      <View style={styles.background}>
        <LinearGradient
          colors={['#2F0909', '#000000', '#000000']}
          start={{x: 0.5, y: 0.1}}
          style={styles.linearGradient}>
          <View style={styles.components}>
            <Header />
            <Body />
            <Footer />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default BusinessSearch;

const styles = StyleSheet.create({
  businessStyle: {
    height: 1000,
    width: '100%',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
  },
  background: {
    position: 'absolute',
    width: '100%',
  },
  coverImage: {
    height: 600,
    justifyContent: 'center',
  },
  linearGradient: {},
  components: {
    height: '100%',
  },
});
