/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets/icons';
import {ProfileFace} from '../../../assets/images';
import {Gap} from '../../atoms';

const Header = ({title, OnBack, subTitle, Profile}) => {
  return (
    <View style={styles.container}>
      {OnBack && (
        <TouchableOpacity onPress={OnBack}>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <Gap width={26} />
      <View>
        <Text style={styles.text}>{title}</Text>
        {subTitle && <Text style={styles.subText}>{subTitle}</Text>}
      </View>
      {Profile && (
        <View style={styles.faceWrapper}>
          <Image style={styles.face} source={ProfileFace} />
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
  back: {
    padding: 10,
  },
  subText: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  faceWrapper: {
    width: 175.5,
    paddingLeft: 98,
    paddingTop: 10,
    alignItems: 'center',
  },
  face: {
    width: 55,
    height: 55,
    borderRadius: 8,
  },
});
