import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navbar from '../components/Navbar';

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to the Profile Screen</Text>
    <Navbar />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ProfileScreen;
