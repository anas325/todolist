import React from 'react'; 
import { View, Text, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

export default function DetailsScreen({ route }) { 
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
      <Text>Ecran de détails</Text> 
      {route.params && <Text>ID reçu : {route.params.id}</Text>} 
    </View> 
  ); 
} 