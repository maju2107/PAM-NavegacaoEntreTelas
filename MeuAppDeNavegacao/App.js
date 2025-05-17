import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen  from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen}/> /* tira a setinha de voltar */
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/> /* tira o cabeçalho */
      </Stack.Navigator>
    </NavigationContainer>
  );
}


