import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuButton from './MenuButton';
import withBackground from './Background';

const EnergyGuruScreen = ({ navigation }) => {
  const options = [
    { key: 'aiInsights', title: 'AI Insights' },
    { key: 'costPrediction', title: 'Cost Prediction' },
    { key: 'applianceHealth', title: 'Appliance Health facts' },
    { key: 'energyForecasts', title: 'Energy Forecasts' }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MenuButton navigation={navigation} />
        <Text style={styles.headerTitle}>Energy Guru</Text>
        <Ionicons name="search" size={30} color="white" />
      </View>

      <ImageBackground
        source={require('../assets/AI-image.png')}
        style={styles.optionsContainer}
        imageStyle={{ opacity: 0.5 }}
      >
        <Text style={styles.mainTitle}>AI Insights</Text>
        {options.slice(1).map(option => (
          <TouchableOpacity key={option.key} style={styles.option}>
            <Text style={styles.optionText}>{option.title}</Text>
            <Ionicons name="chevron-forward" size={25} color="white" />
          </TouchableOpacity>
        ))}
      </ImageBackground>
    <TouchableOpacity>
      <ImageBackground
        source={require('../assets/Energy_saving_tips.jpeg')} 
        style={styles.banner}
        imageStyle={{ opacity: 0.75 }}
        resizeMode="cover"
      >
        <Text style={styles.bannerText}>Energy Saving Tips</Text>
      </ImageBackground>
    </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    marginBottom: 85,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent',
    marginTop: 40,
  },
  headerTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold'
  },
  optionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: 10,
  },
  mainTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 }, 
    textShadowRadius: 1
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10
  },
  optionText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 }, 
    textShadowRadius: 1
  },
  banner: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 }, 
    textShadowRadius: 1
  }
});

export default withBackground(EnergyGuruScreen);
