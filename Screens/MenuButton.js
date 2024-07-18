import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const MenuButton = ({ navigation }) => {
  return (
    <Ionicons
      name="menu"
      size={30}
      color="white"
      style={{ marginLeft: 15 }}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

export default MenuButton;
