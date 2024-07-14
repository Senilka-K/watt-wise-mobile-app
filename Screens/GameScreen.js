import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import withBackground from './Background';

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Games Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});

export default withBackground(GameScreen);
