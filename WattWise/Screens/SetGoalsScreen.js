import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const name = 'Senilka Karunarathna'

const SetGoalsScreen = () => {
    const [targetPower, setTargetPower] = useState(3500);
    const [targetBill, setTargetBill] = useState(5000);
    const [tasks, setTasks] = useState([
        { id: 't1', text: "Achieved Last week's goals", completed: false },
        { id: 't2', text: "Set Targets for Next Week", completed: false },
        { id: 't3', text: "Save Energy Today", completed: false },
    ]);

    const toggleTask = (id) => {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="white" />
                <Text style={styles.headerTitle}>Set Goals</Text>
            </View>

            <View style={styles.profile}>
                <View style={styles.profileText}>
                    <Text style={styles.welcomeText}>Hi, {name}</Text>
                    <Text style={styles.introText}>Start setting ENERGY GOALS today</Text>
                </View>  
                <Image
                        source={require('../assets/Profile.jpg')} 
                        style={styles.profileImage}
                />
            </View>



            <TouchableOpacity style={styles.yourTargetButton}>
                <Text style={styles.yourTargetText}>Your Target</Text>
                <Ionicons name="chevron-forward" size={22} color="white" />
            </TouchableOpacity>

            <View style={styles.targetsContainer}>
                <Text style={styles.targetsHeader}>One step at a time. You'll get there.</Text>
                <View style={styles.sliderContainer}>
                    <Text style={styles.label}>Target Power</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={10000}
                        step={100}
                        value={targetPower}
                        onValueChange={setTargetPower}
                        minimumTrackTintColor="#FF6347"
                        maximumTrackTintColor="#000000"
                    />
                    <Text style={styles.sliderValue}>{targetPower}W - {Math.round((targetPower / 10000) * 100)}%</Text>
                    </View>
                    
                    <View style={styles.sliderContainer}>
                    <Text style={styles.label}>Target Bill</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={20000}
                        step={100}
                        value={targetBill}
                        onValueChange={setTargetBill}
                        minimumTrackTintColor="#FF6347"
                        maximumTrackTintColor="#000000"
                    />
                    <Text style={styles.sliderValue}>Rs.{targetBill} - {Math.round((targetBill / 20000) * 100)}%</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.otherGoalsButton}>
                <Text style={styles.otherGoalsText}>Other Goals</Text>
                <Ionicons name="chevron-forward" size={22} color="white" />
            </TouchableOpacity>

            {tasks.map(task => (
                <View key={task.id} style={styles.taskContainer}>
                    <TouchableOpacity onPress={() => toggleTask(task.id)} style={styles.checkBox}>
                        <Ionicons name={task.completed ? "checkbox" : "square-outline"} size={24} color="red" />
                        <Text style={styles.taskText}>{task.text}</Text>
                    </TouchableOpacity>
                </View>
            ))}

            <TouchableOpacity style={styles.addSubTaskButton}>
                <Ionicons name="add" size={24} color="white" />
                <Text style={styles.addSubTaskText}>Add new sub task</Text>
            </TouchableOpacity>
        </ScrollView>
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
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'transparent',
        marginTop: 20,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 110,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 30,
        marginBottom: 10,
    },
    profileText: {
        alignItems: 'flex-start',
        marginRight: 10,
    },
    welcomeText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 20,
        marginBottom: 10,
    },
    introText: {
        fontSize: 16,
        color: 'white',
        paddingLeft: 20,
        paddingBottom: 20,
    },
    yourTargetButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'transparent',
        marginHorizontal: 20,
        borderRadius: 10,
    },
    yourTargetText: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    },
    targetsContainer: {
        padding: 20,
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderRadius: 15,
        marginBottom: 20,
    },
    targetsHeader: {
        fontSize: 20,
        color: 'grey',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    sliderContainer: {
        marginBottom: 5,
      },
      label: {
        fontSize: 16,
        color: 'black',
        marginTop: 5,
        fontWeight: 'bold',
      },
      slider: {
        height: 40,
      },
      sliderValue: {
        fontSize: 14,
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: 180,
      },
    otherGoalsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingBottom: 10,
        backgroundColor: 'transparent',
        marginHorizontal: 20,
        borderRadius: 10,
    },
    otherGoalsText: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderRadius: 30,
        marginBottom: 10,
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    taskText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 10,
    },
    addSubTaskButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'white',
        marginHorizontal: 100,
        borderRadius: 30,
        marginBottom: 10,
        marginTop: 5,
    },
    addSubTaskText: {
        fontSize: 16,
        color: 'white',
        marginLeft: 10,
    }
});

export default SetGoalsScreen;
