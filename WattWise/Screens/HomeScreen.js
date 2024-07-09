import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="menu" size={30} color="white" style={{ margin: 10 }} />
                <Text style={styles.welcomeText}>Welcome Salee Bandara</Text>
            </View>
            <View style={styles.searchBar}>
                <Text style={styles.searchText}>Search</Text>
            </View>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LiveUpdates')}>
                    <ImageBackground source={require('../assets/detected_face_1.jpg')} style={styles.image}>
                        <Text style={styles.buttonText}>Live Updates</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnergyGuru')}>
                    <ImageBackground source={require('../assets/detected_face_2.jpg')} style={styles.image}>
                        <Text style={styles.buttonText}>Energy Guru{'\n'}The AI Advisor</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Games')}>
                    <ImageBackground source={require('../assets/detected_face_3.jpg')} style={styles.image}>
                        <Text style={styles.buttonText}>Games</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CostTracker')}>
                    <ImageBackground source={require('../assets/detected_face_4.jpg')} style={styles.image}>
                        <Text style={styles.buttonText}>Cost Tracker</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282c34',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#343a40',
        paddingVertical: 10,
    },
    welcomeText: {
        color: 'white',
        fontSize: 20,
    },
    searchBar: {
        backgroundColor: '#ffffff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    searchText: {
        color: '#000',
    },
    contentContainer: {
        padding: 10,
    },
    button: {
        height: 100,
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
});

export default HomeScreen;
