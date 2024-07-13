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
import ApplianceScreen from './Screens/ApplianceScreen';
import EnergyGuruScreen from './Screens/EnergyGuruScreen';
import GameScreen from './Screens/GameScreen';
import CostTrackerScreen from './Screens/CostTrackerScreen';
import SetGoalsScreen from './Screens/SetGoalsScreen';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelPosition: "below-icon",
      tabBarShowLabel: true,
      tabBarActiveTintColor: "purple",
      tabBarStyle: {
        backgroundColor: 'rgba(255,255,255,0.25)',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderTopWidth: 0
      },
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="LiveUpdatesScreen" component={LiveUpdatesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EnergyGuruScreen" component={EnergyGuruScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CostTrackerScreen" component={CostTrackerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ApplianceScreen" component={ApplianceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SetGoalsScreen" component={SetGoalsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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