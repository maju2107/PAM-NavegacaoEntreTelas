import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen  from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen}/> 
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen}/> 
        <Stack.Screen name="Cadastro" options={{headerShown:false}} component={CadastroScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


