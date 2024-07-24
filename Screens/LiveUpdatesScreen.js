import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ImageBackground, ActivityIndicator } from 'react-native';
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import { Circle } from 'react-native-svg';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MenuButton from './MenuButton';
import withBackground from './Background';
import { LogBox } from 'react-native';

const screenWidth = Dimensions.get('window').width;

LogBox.ignoreLogs(['Support for defaultProps will be removed from function components']);

const PointsDecorator = ({ x, y, data }) => {
  return data.map((value, index) => (
      <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={4}
          stroke="rgba(75, 192, 192, 1)" 
          fill="rgba(75, 192, 192, 1)" 
      />
  ));
};

const ChartWithYAxis = ({ data, dataKey, unit}) => {
  const contentInset = { top: 20, bottom: 20 };
  const chartWidth = data.length * 50;

  return (
    <View style={{ height: 240, flexDirection: 'row', marginLeft: 10 }}>
      <YAxis
        data={data.map(item => item[dataKey])}
        contentInset={contentInset}
        svg={{ fill: 'grey', fontSize: 8 }}
        numberOfTicks={10}
        formatLabel={(value) => `${value}${unit}`}
        style={{ width: 40}}
      />
      <ScrollView
        horizontal={true}
        pinchGestureEnabled={true}
        minimumZoomScale={1}
        maximumZoomScale={5}
        style={{ marginLeft: 5, overflow: 'hidden'}}
      >
        <View>
          <LineChart
            style={{ width: chartWidth, height: 220, marginHorizontal: 5 }}
            data={data.map(item => item[dataKey])}
            svg={{ stroke: 'rgba(75, 192, 192, 1)' }}
            contentInset={{ top: 20, bottom: 20, left: 20, right: 20 }}
            curve={shape.curveLinear}
          >
            <Grid />
            <PointsDecorator data={data} />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: 10, height: 10, width: chartWidth }}
            data={data}
            formatLabel={(value, index) => data[index].time}
            contentInset={{ left: 20, right: 20 }}
            svg={{ fontSize: 8, fill: 'grey' }}
          />
        </View>
      </ScrollView>
    </View>
  );
};


const LiveUpdatesScreen = ({ navigation }) => {

  const [powerData, setPowerData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (since) => {
      setIsLoading(true);
      if (!since) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        yesterday.setHours(yesterday.getHours() + 12);
        since = yesterday.getTime() / 1000;
      }
    
      since = parseInt(since);
      
      try {
        const query = `query{ realtime(sinceTimestamp: ${since}){timestamp, reading} }`;

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://z3u4qoi3ul.execute-api.ap-south-1.amazonaws.com/prod/graphql', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              const result = JSON.parse(xhr.responseText);

              if (result.data && result.data.realtime && result.data.realtime.length > 1) {
                const data = result.data.realtime;
                const isAscending = data[0].timestamp < data[data.length - 1].timestamp;
  
                const processedPowerData = (isAscending ? data.slice(-30) : data.slice(0, 30).reverse()) // change the datapoint count
                  .map(item => ({
                    time: new Date(item.timestamp * 1000).toLocaleTimeString(),
                    value: item.reading,
                  }));  

                const processedCurrentData = processedPowerData.map(item => ({
                  time: item.time,
                  value: item.value / 230, // Power (W) / Voltage (V) = Current (A)
                }));

                setPowerData(processedPowerData);
                setCurrentData(processedCurrentData);
              } else {
                console.error('Unexpected response structure:', result);
              }
            } else {
              console.error('Request failed', xhr.status, xhr.statusText);
            }
            setIsLoading(false);
          }
        };

        xhr.send(query);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.appHeader}>
        <MenuButton navigation={navigation} />
        <Text style={styles.appTitle}>Live Updates</Text>
        <Ionicons name="search" size={30} color="white" />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Total Consumption</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SetGoalsScreen')}>
          <Text style={styles.buttonText}>Set Goals</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chartCard}>
        <View style={styles.valueContainer}>
          <Text style={styles.subHeader}>Power</Text>
          <Text style={styles.currentValue}>
            {isLoading ? <ActivityIndicator size="small" color="grey" /> : `${powerData[powerData.length - 1]?.value}W`}
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="grey" style={styles.loader} />
        ) : (
          <ChartWithYAxis style={styles.chart} data={powerData} dataKey="value" unit="W" />
        )}
      </View>


      <View style={styles.chartCard}>
        <View style={styles.valueContainer}>
          <Text style={styles.subHeader}>Current</Text>
          <Text style={styles.currentValue}>
            {isLoading ? <ActivityIndicator size="small" color="grey" /> : `${currentData[currentData.length - 1]?.value.toFixed(2)}mA`}
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="grey" style={styles.loader} />
        ) : (
          <ChartWithYAxis style={styles.chart} data={currentData} dataKey="value" unit="mA"/>
        )}
      </View>

      <TouchableOpacity style={styles.appliancebutton} onPress={() => navigation.navigate('ApplianceScreen')}>
        <ImageBackground source={require('../assets/appliance_corner.png')} style={styles.image} imageStyle={{ opacity: 0.75 }}>
          <Text style={styles.appliancebuttonText}>Appliance Corner</Text>
        </ImageBackground>
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
  appHeader: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 50,
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
  },
  appTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 10,
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
    paddingHorizontal: 20,
    marginTop: 20,
  },
  subHeader: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  currentValue: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  chartCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    marginTop: 5,
    marginHorizontal: 20,
    marginBottom: 10,
    minHeight: 300,
  },
  chart: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appliancebutton: {
    height: 200,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
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

export default withBackground(LiveUpdatesScreen);