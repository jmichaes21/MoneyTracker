/* eslint-disable prettier/prettier */
import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {ProfileFace} from '../../assets/images';

const SignUpPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" OnBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <View style={styles.addPhoto}>
              <Image source={ProfileFace} style={styles.addPhoto} />
            </View>
          </View>
        </View>
        <TextInput title="Full Name" placeholder="Type Your Full Name" />
        <Gap height={16} />
        <TextInput title="Email Address" placeholder="Type Your Email" />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type Your Password" />
        <Gap height={24} />
        <Button title="Continue" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default SignUpPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  addPhotoText: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    maxWidth: 40,
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 110,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
