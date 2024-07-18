import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import MenuButton from './MenuButton';
import withBackground from './Background';

const screenWidth = Dimensions.get('window').width;

const CostTrackerScreen = ({ navigation }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');
  const [amount, setAmount] = useState('8679.48');
  const [percentage, setPercentage] = useState('+49.89%');
  const scrollRef = useRef();

  const data = {
    day: { amount: '900.34', percentage: '+5.00%' },
    week: { amount: '2300.76', percentage: '+15.00%' },
    month: { amount: '8679.48', percentage: '+49.89%' },
    year: { amount: '32000.12', percentage: '+29.75%' }
  };

  const onValueChange = (value) => {
    setSelectedTimeframe(value);
    setAmount(data[value].amount);
    setPercentage(data[value].percentage);
  };

  const billHistory = [
    { month: 'January', cost: 'Rs.5600', change: '-5.93%' },
    { month: 'February', cost: 'Rs.5900', change: '+3.10%' },
    { month: 'March', cost: 'Rs.6200', change: '+5.08%' },
    { month: 'April', cost: 'Rs.6150', change: '-0.81%' }
  ];

  const [currentIndex, setCurrentIndex] = useState(billHistory.length - 1);

  const goNext = () => {
    if (currentIndex < billHistory.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const weeklyCostData = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    datasets: [{
      data: [910, 948, 960, 935, 956, 970, 920],
      color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
      strokeWidth: 2 
    }],
    legend: ["Daily Cost"]
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MenuButton navigation={navigation} />
        <Text style={styles.title}>Cost Tracker</Text>
        <Ionicons name="search" size={30} color="white" style={styles.icon} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Cost for last</Text>
        <RNPickerSelect
          onValueChange={onValueChange}
          items={[
            { label: 'Day', value: 'day' },
            { label: 'Week', value: 'week' },
            { label: 'Month', value: 'month' },
            { label: 'Year', value: 'year' }
          ]}
          style={pickerSelectStyles}
          value={selectedTimeframe}
          useNativeAndroidPickerStyle={false} // Add this line to use custom styles
        />
        <View style={styles.priceCard}>
            <Image
                source={require('../assets/dollar-sign-2.jpeg')}  
                style={styles.sign}
            />
            <Text style={styles.signText}>LKR</Text>
            <View style={styles.price}>
                <Text style={styles.amount}>Rs. {amount}</Text>
                <Text style={styles.changePositive}>{percentage}</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Set Targets</Text>
        </TouchableOpacity>
      </View>
        
      <View style={styles.chartCard}>
        <LineChart
          data={weeklyCostData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Bill History</Text>
        <View style={styles.historyCard}>
        <TouchableOpacity onPress={goPrevious} disabled={currentIndex === 0}>
          <Ionicons name="chevron-back" size={30} color={currentIndex === 0 ? 'grey' : 'grey'} />
        </TouchableOpacity>
        <View style={styles.historyInfo}>
          <Image
                source={require('../assets/dollar-sign.jpeg')}  
                style={styles.sign2}
            />
          <Text style={styles.month}>{billHistory[currentIndex].month}</Text>
          <View style={styles.costCard}>
            <Text style={styles.cost}>{billHistory[currentIndex].cost}</Text>
            <Text style={styles.change}>{billHistory[currentIndex].change}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={goNext} disabled={currentIndex === billHistory.length - 1}>
          <Ionicons name="chevron-forward" size={30} color={currentIndex === billHistory.length - 1 ? 'grey' : 'grey'} />
        </TouchableOpacity>
      </View>
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold'
  },
  icon: {
    padding: 10
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginTop: 5,
    margin: 20
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  priceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  signText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    alignItems: 'flex-end',
  },
  sign: {
    width: 50,
    height: 50,
    borderRadius: 25,
},
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 5,
    marginTop:10,
    marginLeft: 50,
  },
  changePositive: {
    fontSize: 16,
    color: '#27ae60',
    fontWeight: 'bold',
    marginLeft: 80,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 20,
    marginTop: 15,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  chartCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginTop: 5,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  chart: {
    marginTop: 5,
    borderRadius: 16,
    paddingVertical: 5,
    marginRight: 20,
    alignItems: 'center',
  },
  historyContainer: {
    marginVertical: 8,
    paddingLeft: 20,
    marginBottom: 10,
  },
  historyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
  historyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    marginRight: 20,
  },
  historyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sign2: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  month: {
    fontSize: 22,
    color: 'black',
    marginRight: 40,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  costCard: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  cost: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  change: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold'
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 40,
    color: 'black',
    textAlign: 'center',
    paddingRight: 30,
    marginHorizontal: 60,
  },
  inputAndroid: {
    fontSize: 18,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 10,
    color: 'black',
    paddingRight: 30,
  },
})
export default withBackground(CostTrackerScreen);
