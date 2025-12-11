import React from 'react'; 
import { View, Text, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { Ionicons } from '@expo/vector-icons';
import AppBar from './screens/appBar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; 

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator(); 
 
// --- Écrans --- 
 

 

 
// --- Navigation par pile --- 
function HomeStack() { 
  return ( 
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen  name="Accueil"  component={HomeScreen}  options={{ 
        headerStyle: { backgroundColor: '#007AFF' },    headerTintColor: '#fff',    headerTitleStyle: { 
    fontWeight: 'bold' }, 
      }} 
    />       
    <Stack.Screen  name="Details"  component={DetailsScreen}  options={{ title: 'Mes Détails Personnalisés' }} 
/> 
    </Stack.Navigator> 
  ); 
} 
 
// --- Navigation par onglets --- 
export default function App() { 
  return ( 
     <SafeAreaProvider>
         <SafeAreaView style={{ flex: 1, backgroundColor: '#007AFF' }}>
    <NavigationContainer> 
       <AppBar /> 
      <Tab.Navigator 
screenOptions={{ 
headerShown: false,          
// cacher le header 
tabBarActiveTintColor: 'blue', // couleur de l’onglet 
tabBarInactiveTintColor: 'gray', // couleur de l’onglet 
tabBarStyle: { backgroundColor: '#f0f0f0' }, // style de 
tabBarLabelStyle: { fontSize: 14 }, // style du texte 
}} 
> 
        <Tab.Screen  name="Maison"  component={HomeStack}  options={{ tabBarIcon: ({ color, size 
}) => (  <Ionicons name="home" size={size} color={color} />     ), 
}} /> 
<Tab.Screen name="Paramètres" component={SettingsScreen} options={{ tabBarIcon: ({ 
color,    size }) => ( <Ionicons name="settings" size={size} color={color} />  ), 
}}  />
      </Tab.Navigator> 
    </NavigationContainer>
    </SafeAreaView>
    </SafeAreaProvider> 
  ); 
}