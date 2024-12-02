// src/screens/HomeScreen.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppLayout from '../components/AppLayout';

const HomeScreen = () => {
  return (
    <AppLayout>
      <View style={styles.container}>
        <Text style={styles.title}>🏡 Welcome to Home Screen!</Text>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E88E5',
  },
});

export default HomeScreen;
