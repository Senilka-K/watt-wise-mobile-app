import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import withBackground from './Background';

const name = 'Senilka Karunarathna'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="menu" size={30} color="white" style={{ margin: 10 }} />
                <View style={styles.Profile}>
                    <Image
                    source={require('../assets/Profile.jpg')}  
                    style={styles.profilePic}
                    />
                    <Text style={styles.welcomeText}>Welcome, {'\n'} {name}</Text>
                </View>
            </View>
            <View style={styles.searchBar}>
                <Text style={styles.searchText}>Search</Text>
            </View>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LiveUpdatesScreen')} >
                    <ImageBackground source={require('../assets/HomeScreen_image_1.jpeg')} style={styles.image} imageStyle={{ opacity: 0.5 }}>
                        <Ionicons name="megaphone" size={60} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>Live Updates</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnergyGuruScreen')}>
                    <ImageBackground source={require('../assets/HomeScreen_image_2.jpeg')} style={styles.image} imageStyle={{ opacity: 0.5 }}>
                        <Ionicons name="bulb" size={60} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>Energy Guru{'\n'}The AI Advisor</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GameScreen')}>
                    <ImageBackground source={require('../assets/HomeScreen_image_3.jpeg')} style={styles.image} imageStyle={{ opacity: 0.5 }}>
                        <Ionicons name="game-controller" size={60} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>Games</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CostTrackerScreen')}>
                    <ImageBackground source={require('../assets/HomeScreen_image_4.jpeg')} style={styles.image} imageStyle={{ opacity: 0.5 }}>
                        <Ionicons name="calculator" size={60} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>Cost Tracker</Text>
                    </ImageBackground>
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
        backgroundColor: 'transparent',
        paddingVertical: 10,
    },
    Profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 3,
    },
    welcomeText: {
        color: 'white',
        fontSize: 22,
        textAlign: "center",
        marginLeft: 20,
    },
    searchBar: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
    },
    searchText: {
        color: '#000',
    },
    contentContainer: {
        padding: 10,
    },
    button: {
        height: 100,
        margin: 15,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1.0,
    },
    buttonText: {
        fontSize: 34,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 70,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 }, 
        textShadowRadius: 1
    },
    icon: {
        position: 'absolute',
        left: 30,
    }
});

export default withBackground(HomeScreen);
