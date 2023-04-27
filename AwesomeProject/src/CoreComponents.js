/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import Laptop from '../img/laptop.jpeg';

const CoreComponents = ({title, subTitle}) => {
  return (
    <ScrollView>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <View style={styles.yellowBox} />
      <Image source={require('../img/laptop.jpeg')} style={styles.image} />
      <Image source={Laptop} style={styles.image} />
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={styles.image}
      />
      <TextInput placeholder="Masukan nama anda" style={styles.textInput} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'red',
    textAlign: 'center',
  },
  yellowBox: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
  image: {
    width: 200,
    height: 200,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
});

export default CoreComponents;
