// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ImageBackground, ScrollView } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import withBackground from './Background';

// const screenWidth = Dimensions.get('window').width;

// const LiveUpdatesScreen = ({ navigation }) => {
//   const chartConfig = {
//     backgroundColor: '#ffffff',
//     backgroundGradientFrom: '#ffffff',
//     backgroundGradientTo: '#ffffff',
//     decimalPlaces: 0,
//     color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     style: {
//       borderRadius: 16
//     },
//     propsForDots: {
//       r: "6",
//       strokeWidth: "2",
//     }
//   };
      
//   const fullPowerData = {
//     labels: ["2:00", "6:00", "10:00", "14:00", "18:00", "22:00"],
//     datasets: [{
//       data: [100, 200, 150, 450, 300, 500],
//       color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
//       strokeWidth: 2,
//     }],
//     legend: ['Power Consumption']
//   };

//   const fullCurrentData = {
//     labels: ["2:00", "6:00", "10:00", "14:00", "18:00", "22:00"],
//     datasets: [{
//       data: [0.5, 1.0, 1.5, 2.0, 2.5, 2.0],
//       color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
//       strokeWidth: 2,
//     }],
//     legend: ['Current Usage']
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.appHeader}>
//         <Ionicons name="menu" size={30} color="white"/>
//         <Text style={styles.appTitle}>Live Updates</Text>
//         <Ionicons name="search" size={30} color="white" />
//       </View>

//       <View style={styles.headerContainer}>
//         <Text style={styles.header}>Total Consumption</Text>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SetGoalsScreen')}>
//           <Text style={styles.buttonText}>Set Goals</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.chartCard}>
//         <View style={styles.valueContainer}>
//           <Text style={styles.subHeader}>Power</Text>
//           <Text style={styles.currentValue}>5634W</Text>
//         </View>
//           <LineChart
//             data={fullPowerData}
//             width={screenWidth - 40} 
//             height={180}              
//             chartConfig={chartConfig}
//             style={styles.chart}
//           />
//       </View>

//       <View style={styles.chartCard}>
//         <View style={styles.valueContainer}>
//           <Text style={styles.subHeader}>Current</Text>
//           <Text style={styles.currentValue}>1.67mA</Text>
//         </View>
//         <LineChart
//           data={fullCurrentData}
//           width={screenWidth - 40}  
//           height={180}               
//           chartConfig={chartConfig}
//           style={styles.chart}
//         />
//       </View>

//       <TouchableOpacity style={styles.appliancebutton} onPress={() => navigation.navigate('ApplianceScreen')}>
//         <ImageBackground source={require('../assets/appliance_corner.png')} style={styles.image} imageStyle={{ opacity: 0.75 }}>
//           <Text style={styles.appliancebuttonText}>Appliance Corner</Text>
//         </ImageBackground>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     marginBottom: 80,
//   },
//   appHeader: {
//     backgroundColor: 'transparent',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 30,
//     paddingHorizontal: 50,
//     width: '100%',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   appTitle: {
//     color: 'white',
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginLeft: 40,
//     marginRight: 30,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     marginBottom: 10,
//   },
//   header: {
//     fontSize: 24,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   button: {
//     backgroundColor: 'blue',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   valueContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginTop: 20,
//   },
//   subHeader: {
//     fontSize: 24,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   currentValue: {
//     fontSize: 24,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   chartCard: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 5,
//     marginTop: 5,
//     marginHorizontal: 20,
//     marginBottom: 10,
//   },
//   chart: {
//     marginBottom: 10,
//     marginTop: 10,
//     borderRadius: 10,
//     alignSelf: 'center',
//   },
//   zoomControls: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   zoomButton: {
//     backgroundColor: '#007AFF',
//     padding: 10,
//     borderRadius: 5,
//     marginHorizontal: 10,
//   },
//   zoomButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   appliancebutton: {
//     height: 200,
//     marginHorizontal: 15,
//     marginTop: 10,
//     borderRadius: 20,
//     overflow: 'hidden',
//     marginBottom: 10,
// },
// image: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     opacity: 1.0,
// },
// appliancebuttonText: {
//     fontSize: 36,
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)', 
//     textShadowOffset: { width: -1, height: 1 },
//     textShadowRadius: 1
// }
// });

// export default withBackground(LiveUpdatesScreen);

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ImageBackground, ScrollView, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MenuButton from './MenuButton';
import withBackground from './Background';

const screenWidth = Dimensions.get('window').width;

const BASE_URL = 'https://z3u4qoi3ul.execute-api.ap-south-1.amazonaws.com/prod/graphql';

const LiveUpdatesScreen = ({ navigation }) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const query = `{
      usageData(startDate: ${parseInt((Date.now() / 1000) - 86400)}, endDate: ${parseInt(Date.now() / 1000)}) {
        timestamp,
        dayUse,
        nightUse
      }
    }`;

    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const jsonResponse = await response.json();
      const formattedData = {
        labels: jsonResponse.data.usageData.map(el => new Date(el.timestamp * 1000).toLocaleDateString()),
        datasets: [
          {
            data: jsonResponse.data.usageData.map(el => el.dayUse),
            color: (opacity = 1) => `rgba(54, 162, 235, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },
          {
            data: jsonResponse.data.usageData.map(el => el.nightUse),
            color: (opacity = 1) => `rgba(29, 41, 81, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ]
      };
      setData(formattedData);
    } catch (error) {
      console.error('Fetching data failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
        {loading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <LineChart
            data={data}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726'
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        ) : (
          <Text>No data available</Text>
        )}
        <Button title="Refresh Data" onPress={fetchData} />
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
  },
  chart: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  zoomControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  zoomButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  zoomButtonText: {
    color: '#fff',
    fontSize: 16,
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
