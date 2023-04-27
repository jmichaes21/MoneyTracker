//import
import React from 'react';
// import SignIn from './src/screens/SignIn/index.js';
// import {SignUp} from './src/screens/index.js';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router/index.js';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

//Function Component

//Export
export default App;
