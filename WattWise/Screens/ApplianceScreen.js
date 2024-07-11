import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const ApplianceScreen = () => {
  const [appliances, setAppliances] = useState([
    { id: 1, name: 'Fridge', icon: 'kitchen', power: '2678W', alwaysOn: true },
    { id: 2, name: 'Dryer', icon: 'local-laundry-service', power: '500W', alwaysOn: false, on: false },
    { id: 3, name: 'Rice cooker', icon: 'restaurant', power: '2616W', alwaysOn: false, on: true },
    { id: 4, name: 'Microwave Oven', icon: 'microwave', power: '1652W', alwaysOn: false, on: true },
    { id: 5, name: 'Bedroom Lights', icon: 'lightbulb', power: '500W', alwaysOn: false, on: true },
    { id: 6, name: 'Television', icon: 'tv', power: '300W', alwaysOn: false, on: false },
    { id: 7, name: 'Electric Kettle', icon: 'local-cafe', power: '1200W', alwaysOn: false, on: false },
    { id: 8, name: 'Washing Machine', icon: 'local-laundry-service', power: '800W', alwaysOn: false, on: false },
    { id: 9, name: 'A/C', icon: 'ac-unit', power: '3500W', alwaysOn: true }
  ]);
  const [showAlwaysOn, setShowAlwaysOn] = useState(false);

  const toggleSwitch = (id) => {
    setAppliances(appliances.map(appliance =>
      appliance.id === id ? { ...appliance, on: !appliance.on } : appliance
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={30} color="white" style={{ margin: 10 }} />
        <Text style={styles.headerText}>Appliance Corner</Text>
      </View>
      <TouchableOpacity style={styles.alwaysOnHeader} onPress={() => setShowAlwaysOn(!showAlwaysOn)}>
        <MaterialIcons name="access-time" size={24} color="white" style={styles.alwaysOnIcon} />
        <Text style={styles.alwaysOnText}>Always On</Text>
        <Ionicons name={showAlwaysOn ? "chevron-down" : "chevron-forward"} size={20} color="white" />
      </TouchableOpacity>
      {showAlwaysOn && appliances.filter(appliance => appliance.alwaysOn).map(appliance => (
        <View key={appliance.id} style={styles.applianceItem}>
          <MaterialIcons name={appliance.icon} size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.applianceName}>{appliance.name}</Text>
          <Text style={styles.appliancePower}>{appliance.power}</Text>
        </View>
      ))}
      {appliances.filter(appliance => !appliance.alwaysOn).map((appliance, index) => (
        <View key={appliance.id} style={styles.applianceItem}>
          <MaterialIcons name={appliance.icon} size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.applianceName}>{appliance.name}</Text>
          <Switch
            style={styles.toggleSwitch}
            trackColor={{ false: "#767577", true: "skyblue" }}
            thumbColor={appliance.on ? "black" : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(appliance.id)}
            value={appliance.on}
          />
          {appliance.on && <Text style={styles.appliancePower}>{appliance.power}</Text>}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  alwaysOnHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginBottom: 20,
    borderRadius: 20,
  },
  alwaysOnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  applianceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: 'rgba(255,255,255,0.1)', 
    marginBottom: 20,
    borderRadius: 10,
  },
  applianceName: {
    color: 'white',
    fontSize: 18,
    flex: 2,
    textAlign: 'left'
  },
  appliancePower: {
    color: 'white',
    fontSize: 18,
    flex: 1,
    textAlign: 'center'
  },
  toggleSwitch: {
    flex: 0,
}
});

export default ApplianceScreen;
