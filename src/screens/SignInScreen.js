import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import the navigation hook

// If using local images, use require to import the image
const googleLogo =
  'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'; // Google logo URL
const appleLogo =
  'https://upload.wikimedia.org/wikipedia/commons/7/75/Apple_logo_black.svg'; // Apple logo URL

const SignInScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')} // Correct way to load local images
          style={styles.logo}
        />
        <Text style={styles.title}>Selfie</Text>
        <Text style={styles.subtitle}>Share your vibe globally</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.buttonContainer}>
          {/* Google Button */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => navigation.navigate('Home')} // Navigate to Home Screen
          >
            <Image source={{uri: googleLogo}} style={styles.buttonIcon} />
            <Text style={styles.buttonTextBlack}>Sign up with Google</Text>
          </TouchableOpacity>

          {/* Apple Button */}
          <TouchableOpacity style={styles.appleButton}>
            <Image source={{uri: appleLogo}} style={styles.buttonIcon} />
            <Text style={styles.buttonTextBlack}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.termsText}>
          I accept the Terms, Conditions, Policies
        </Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Terms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Help</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // upper part is black
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 6,
  },
  title: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
  },
  contentContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 20,
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center', // buttons will be centered
    width: '80%', // container width for the buttons
  },
  googleButton: {
    backgroundColor: '#8A28C0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row', // to place the icon and text side by side
    justifyContent: 'center',
    marginBottom: 15,
  },
  appleButton: {
    backgroundColor: '#8A28C0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row', // to place the icon and text side by side
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10, // space between the icon and text
  },
  buttonTextBlack: {
    color: '#fff',
    fontSize: 16,
  },
  termsText: {
    color: '#000000',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 80,
  },
  footer: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-evenly', // Distribute items evenly across the container
    width: '100%', // Full width
    paddingVertical: 10, // Optional padding for vertical spacing
    backgroundColor: '#000', // Dark background color for footer
    position: 'absolute', // Position the footer at the bottom
    bottom: 0, // Bottom position
  },
  footerButton: {
    padding: 10, // Add padding for spacing between buttons
  },
  footerText: {
    fontSize: 16, // Adjust font size
    color: '#fff', // White text color
    fontWeight: '500', // Slightly bold text
  },
});

export default SignInScreen;
