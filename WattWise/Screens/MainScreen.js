import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>WattWise</Text>
      <Text style={styles.tagline}>Where Efficiency Meets Intelligence.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'transparent', // Ensuring it's transparent
    alignItems: 'center',
    justifyContent: 'center',
    },
    logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    },
    tagline: {
    fontSize: 18,
    color: 'white', 
    textAlign: 'center',
    paddingHorizontal: 20,
    }
});

export default MainScreen;
