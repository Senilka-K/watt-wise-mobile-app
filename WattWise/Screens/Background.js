import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const withBackground = (Component) => (props) => (
  <ImageBackground
    source={require('/Users/senilkakarunarathna/Documents/Projects/watt-wise-app/watt-wise-mobile-app/WattWise/assets/Background.jpeg')}
    style={styles.background}
    resizeMode="cover"
  >
    <Component {...props} />
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});

export default withBackground;
