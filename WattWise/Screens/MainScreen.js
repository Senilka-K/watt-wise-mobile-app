import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import withBackground from './Background';

const MainScreen = ({ navigation }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
      return () => clearTimeout(timer);
    }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}  
        style={styles.logo}
      />
      <Text style={styles.tagline}>Where Efficiency Meets Intelligence.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,  
    height: 100, 
    resizeMode: 'contain' 
  },
  tagline: {
    fontSize: 24,
    color: 'white', 
    textAlign: 'center',
    paddingHorizontal: 20,
  }
});

export default withBackground(MainScreen);
