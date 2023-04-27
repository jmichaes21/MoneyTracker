/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import {useEffect} from 'react';
import React from 'react';
import {Logo} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  });
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02CF8E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
