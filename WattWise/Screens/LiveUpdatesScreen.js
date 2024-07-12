import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const LiveUpdatesScreen = () => {
  const chartConfig = {
    backgroundColor: 'rgba(39, 60, 117, 0.1)',
    backgroundGradientFrom: 'rgba(39, 60, 117, 0.1)',
    backgroundGradientTo: 'rgba(39, 60, 117, 0.1)',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      strokeWidth: "2",
      stroke: "white"
    },
  };
      
  const powerData = {
    labels: ["2:00", "6:00", "10:00", "14:00", "18:00", "22:00"],
    datasets: [{
      data: [100, 200, 150, 450, 300, 500],
      color: (opacity = 1) => `rgba(173, 216, 230, ${opacity})`,
      strokeWidth: 5,
    }]
  };

  const currentData = {
    labels: ["2:00", "6:00", "10:00", "14:00", "18:00", "22:00"],
    datasets: [{
      data: [0.5, 1.0, 1.5, 2.0, 2.5, 2.0],
      color: (opacity = 1) => `rgba(173, 216, 230, ${opacity})`,
      strokeWidth: 5
    }]
  };

  return (
    <View style={styles.container}>
      <View style={styles.appHeader}>
        <Ionicons name="menu" size={30} color="white"/>
        <Text style={styles.appTitle}>Live Updates</Text>
        <Ionicons name="search" size={30} color="white" />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Total Consumption</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Set Goals</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.subHeader}>Power</Text>
        <Text style={styles.currentValue}>5634W</Text>
      </View>
      <LineChart
        data={powerData}
        width={screenWidth - 100} 
        height={180}              
        chartConfig={chartConfig}
        style={styles.chart}
      />
      <View style={styles.valueContainer}>
        <Text style={styles.subHeader}>Current</Text>
        <Text style={styles.currentValue}>1.67mA</Text>
      </View>
      <LineChart
        data={currentData}
        width={screenWidth - 100}  
        height={180}               
        chartConfig={chartConfig}
        style={styles.chart}
      />
      <TouchableOpacity style={styles.appliancebutton} onPress={() => navigation.navigate('ApplianceCorner')}>
        <ImageBackground source={require('../assets/appliance_corner.png')} style={styles.image} imageStyle={{ opacity: 0.75 }}>
          <Text style={styles.appliancebuttonText}>Appliance Corner</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  appHeader: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 50,
    width: '100%',
    textAlign: 'center',
  },
  appTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  subHeader: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  currentValue: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  chart: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  appliancebutton: {
    height: 180,
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
},
image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1.0,
},
appliancebuttonText: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
}
});

export default LiveUpdatesScreen;
