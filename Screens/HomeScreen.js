import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuButton from './MenuButton';
import withBackground from './Background';

const name = 'John Doe'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MenuButton navigation={navigation} />
                <View style={styles.Profile}>
                    <Image
                    source={require('../assets/Profile.jpg')}  
                    style={styles.profilePic}
                    />
                    <Text style={styles.welcomeText}>Welcome,{'\n'}{name}</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LiveUpdatesScreen')} >
                    <ImageBackground source={require('../assets/HomeScreen_image_1.jpeg')} style={styles.image} imageStyle={{ opacity: 0.35 }}>
                        <Ionicons name="megaphone" size={60} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>Live Updates</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnergyGuruScreen')}>
                    <ImageBackground source={require('../assets/HomeScreen_image_2.jpeg')} style={styles.image} imageStyle={{ opacity: 0.35 }}>
                        <Ionicons name="bulb" size={60} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>Energy Guru{'\n'}The AI Advisor</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GameScreen')}>
                    <ImageBackground source={require('../assets/HomeScreen_image_3.jpeg')} style={styles.image} imageStyle={{ opacity: 0.35 }}>
                        <Ionicons name="game-controller" size={60} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>Games</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CostTrackerScreen')}>
                    <ImageBackground source={require('../assets/HomeScreen_image_4.jpeg')} style={styles.image} imageStyle={{ opacity: 0.35 }}>
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
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingVertical: 5,
        marginTop: 50,
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
        textAlign: "left",
        marginLeft: 20,
    },
    contentContainer: {
        padding: 10,
        justifyContent: 'center',
    },
    button: {
        height: 140,
        margin: 6,
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
