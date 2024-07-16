// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from '@react-navigation/stack';
// import MainScreen from './Screens/MainScreen';
// import LoginScreen from "./Screens/LoginScreen";
// import HomeScreen from "./Screens/HomeScreen";
// import HistoryScreen from './Screens/HistoryScreen';
// import NotificationScreen from './Screens/NotificationScreen';
// import ProfileScreen from './Screens/ProfileScreen';
// import LiveUpdatesScreen from './Screens/LiveUpdatesScreen';
// import ApplianceScreen from './Screens/ApplianceScreen';
// import EnergyGuruScreen from './Screens/EnergyGuruScreen';
// import GameScreen from './Screens/GameScreen';
// import CostTrackerScreen from './Screens/CostTrackerScreen';
// import SetGoalsScreen from './Screens/SetGoalsScreen';
// import Ionicons from "@expo/vector-icons/Ionicons";

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function MenueTabs() {
//   return (
//     <Tab.Navigator screenOptions={{
//       tabBarLabelPosition: "below-icon",
//       tabBarShowLabel: true,
//       tabBarActiveTintColor: "purple",
//       tabBarInactiveTintColor: "white",
//       tabBarStyle: {
//         backgroundColor: 'rgba(255,255,255,0.25)',
//         position: 'absolute',
//         left: 0,
//         bottom: 0,
//         right: 0,
//         elevation: 0,
//         shadowOpacity: 0,
//         borderTopWidth: 0
//       },
//     }}>
//       <Tab.Screen
//         name="HomeTab"
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="home-outline" size={25} color={color} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="History"
//         component={HistoryScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'History',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="calendar-outline" size={25} color={color} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Notification"
//         component={NotificationScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Notifications',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="notifications-outline" size={25} color={color} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="person-circle-outline" size={25} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Home" component={MenueTabs} options={{ headerShown: false }} />
//         <Stack.Screen name="LiveUpdatesScreen" component={LiveUpdatesScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="EnergyGuruScreen" component={EnergyGuruScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="CostTrackerScreen" component={CostTrackerScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="ApplianceScreen" component={ApplianceScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SetGoalsScreen" component={SetGoalsScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
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

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="LiveUpdatesScreen" component={LiveUpdatesScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EnergyGuruScreen" component={EnergyGuruScreen} options={{ headerShown: false }} />
    <Stack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false }} />
    <Stack.Screen name="CostTrackerScreen" component={CostTrackerScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ApplianceScreen" component={ApplianceScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SetGoalsScreen" component={SetGoalsScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const HistoryStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const NotificationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SetGoalsScreen" component={SetGoalsScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

function MenueTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelPosition: "below-icon",
      tabBarShowLabel: true,
      tabBarActiveTintColor: "purple",
      tabBarInactiveTintColor: "black",
      tabBarStyle: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: 10,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderTopWidth: 0
      },
    }}>
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false,
        tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={30} color={color} />
      }} />
      <Tab.Screen name="History" component={HistoryStack} options={{ headerShown: false,
        tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" size={30} color={color} />
      }} />
      <Tab.Screen name="Notifications" component={NotificationStack} options={{ headerShown: false,
        tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={30} color={color} />
      }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false,
        tabBarIcon: ({ color }) => <Ionicons name="person-circle-outline" size={30} color={color} />
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MenueTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}