import React from 'react';
import {SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SignInScreen />
    </SafeAreaView>
  );
};

export default App;
