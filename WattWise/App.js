import React from 'react';
import { View, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Screens/MainScreen';
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import HistoryScreen from './Screens/HistoryScreen';
import NotificationScreen from './Screens/NotificationScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LiveUpdatesScreen from './Screens/LiveUpdatesScreen';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground 
        source={require('/Users/senilkakarunarathna/Documents/Projects/watt-wise-app/watt-wise-mobile-app/WattWise/assets/Background.jpeg')}
        style={styles.backgroundImage}
        resizeMode="cover" 
      >
        {/* <MainScreen/> */}
        {/* <LoginScreen/> */}
        {/* <HomeScreen /> */}
        <LiveUpdatesScreen />

        {/* <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelPosition: "below-icon",
              tabBarShowLabel: true,
              tabBarActiveTintColor: "purple",
              tabBarStyle: { backgroundColor: 'transparent' },
              // headerShown: false,
              cardStyle: { backgroundColor: 'transparent' } 
            }}
          >
            <Tab.Screen
              name="Main"
              component={MainScreen}
              options={{
                tabBarLabel: 'Main',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="shield-outline" size={20} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Login"
              component={LoginScreen}
              options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="log-in" size={20} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="home" size={20} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="History"
              component={LiveUpdatesScreen}
              options={{
                tabBarLabel: 'History',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="calendar-outline" size={20} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Notification"
              component={NotificationScreen}
              options={{
                tabBarLabel: 'Notification',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="notifications-outline" size={20} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="person" size={20} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});