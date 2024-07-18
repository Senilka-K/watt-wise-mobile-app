import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MenuButton from './MenuButton';
import { Ionicons } from '@expo/vector-icons';
import withBackground from './Background';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MenuButton navigation={navigation} />
        <Text style={styles.title}>Notifications</Text>
        <Ionicons name="search" size={30} color="white" style={styles.icon} />
      </View>
      <Text style={styles.text}>Welcome to the Notifications Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold'
  },
  icon: {
    padding: 10
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 10,
    color: 'white',
    marginTop: 300,
  },
});

export default withBackground(NotificationScreen);
