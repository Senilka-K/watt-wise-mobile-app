import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuButton from './MenuButton';
import withBackground from './Background';

const name = 'John Doe'
const email = 'john4321doe@gmail.com'

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MenuButton navigation={navigation} />
                <Text style={styles.headerTitle}>Profile</Text>
            </View>

            <View style={styles.profileInfo}>
                <Image
                    source={require('../assets/Profile.jpg')} 
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.editIcon}>
                    <Ionicons name="pencil" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Edit Profile</Text>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Add Users</Text>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SetGoalsScreen')}>
                    <Text style={styles.menuText}>Set Goals</Text>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>WattWise Social</Text>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton}>
                    <Ionicons name="log-out" size={30} color="white" style={styles.logoutIcon} />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 10,
    },
    headerTitle: {
        fontSize: 32,
        textAlign: 'center',
        color: 'white',
        marginLeft: 110,
    },
    profileInfo: {
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    editIcon: {
      position: 'absolute',
      right: 125,
      bottom: 60,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    email: {
        fontSize: 14,
        color: 'white',
        marginTop: 5,
        marginBottom: 10,
    },
    menuContainer: {
        // marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.25)',
        padding: 30,
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 20,
    },
    menuText: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      padding: 20,
      marginHorizontal: 20,
      borderRadius: 10,
      justifyContent: 'center',
      marginBottom: 30,
    },
    logoutIcon: {
      marginRight: 10,
    },
    logoutText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    }
});

export default withBackground(ProfileScreen);
