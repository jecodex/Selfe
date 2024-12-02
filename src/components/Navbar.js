// src/components/Navbar.js
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      {/* Home Button */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Home')}>
        <Image
          source={{uri: 'https://img.icons8.com/puffy/32/FFFFFF/home.png'}}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Notifications Button */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Notifications')}>
        <Image
          source={{uri: 'https://img.icons8.com/ios/50/FFFFFF/bell--v1.png'}}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Messages Button */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Messages')}>
        <Image
          source={{uri: 'https://img.icons8.com/ios/50/FFFFFF/chat--v1.png'}}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Search Button */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Search')}>
        <Image
          source={{uri: 'https://img.icons8.com/ios/50/FFFFFF/search--v1.png'}}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Profile/User Button */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          source={{uri: 'https://img.icons8.com/ios/50/FFFFFF/user--v1.png'}}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000000', // Blue background color for navbar
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff', // White icon color
  },
});

export default Navbar;
