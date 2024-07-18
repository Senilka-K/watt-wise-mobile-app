import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuButton from './MenuButton';
import withBackground from './Background';

const name = 'John Doe'

const ProgressBar = ({ value, maxValue, style }) => {
    const width = (value / maxValue) * 100 + '%';
    return (
      <View style={[styles.progressBarContainer, style]}>
        <View style={[styles.progressBar, { width }]} />
      </View>
    );
  };

const SetGoalsScreen = ({ navigation }) => {
    const [targetPower, setTargetPower] = useState(3500);
    const [targetBill, setTargetBill] = useState(5000);
    const [tasks, setTasks] = useState([
        { id: 't1', text: "Achieved Last week's goals", completed: true },
        { id: 't2', text: "Complete this week's goals", completed: false},
        { id: 't3', text: "Set Targets for Next Week", completed: false },
        { id: 't4', text: "Save Energy Today", completed: false },
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
                <MenuButton navigation={navigation} />
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
                    <ProgressBar value={targetPower} maxValue={10000} style={styles.progressBarStyle} />
                    <Text style={styles.sliderValue}>{targetPower}W - {Math.round((targetPower / 10000) * 100)}%</Text>
                </View>
                <View style={styles.sliderContainer}>
                    <Text style={styles.label}>Target Bill</Text>
                    <ProgressBar value={targetBill} maxValue={20000} style={styles.progressBarStyle} />
                    <Text style={styles.sliderValue}>Rs.{targetBill} - {Math.round((targetBill / 20000) * 100)}%</Text>
                </View>

            </View>

            <TouchableOpacity style={styles.otherGoalsButton}>
                <Text style={styles.otherGoalsText}>Other Goals</Text>
                <Ionicons name="chevron-forward" size={22} color="white" />
            </TouchableOpacity>
            <Text style={styles.GoalsText}>Be gentle with yourself.</Text>

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
        marginBottom: 80,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'transparent',
        marginTop: 30,
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
        width: 70,
        height: 70,
        borderRadius: 35,
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
        fontSize: 18,
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
        fontSize: 28,
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
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    progressBarContainer: {
        height: 20,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#FF6347',
        borderRadius: 10,
    },
    progressBarStyle: {
        marginBottom: 10,
    },
    sliderValue: {
        fontSize: 14,
        color: 'grey',
        fontWeight: 'bold',
        textAlign: 'right',
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
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
    },
    GoalsText: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
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
        fontSize: 18,
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

export default withBackground(SetGoalsScreen);
