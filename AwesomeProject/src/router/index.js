/* eslint-disable prettier/prettier */
// import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignIn,
  SplashScreen,
  SignUp,
  Home,
  CashOnHand,
  CashOnBank,
  SignUpPhoto,
} from '../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpPhoto"
        component={SignUpPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CashOnHand"
        component={CashOnHand}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CashOnBank"
        component={CashOnBank}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
