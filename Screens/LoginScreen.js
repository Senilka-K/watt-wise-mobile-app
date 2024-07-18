import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import withBackground from './Background';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (name === '' || password === '') {
      alert('Please enter both name and password');
      return;
    }
  
    const validName = 'WattWiseUser';
    const validPassword = 'wattwise1234';
  
    if (name === validName && password === validPassword) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      alert('Invalid username and password');
    }
  };
  

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}  
        style={styles.logo}
      />
      <View style={styles.loginCard}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#cccccc"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#cccccc"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        <Text style={styles.signinText}>
          New to WattWise?{'\n'}
          <Text style={styles.boldText}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logo: {
    width: 350,  
    height: 100, 
    resizeMode: 'contain',
    marginBottom: 10,
  },
  loginCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 25,
  },
  signinText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
  }
});

export default withBackground(LoginScreen);
