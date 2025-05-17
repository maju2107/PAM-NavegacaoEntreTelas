// Criar a tela de Login e deixar ela como 1ª tela do App.js;
//Objetos da tela de login: 2 campos (login/senha) e botão "Entrar";
//Criar navegação entre as telas: Home, Details e Profile;
//Na tela de Home retirar a opção "Goback" (final do pdf);
//Verificar se o usuário digitou o login e a senha corretamente;

import React, {useState,useE} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;


export default function LoginScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lofin</Text>
          <View style={styles.buttonContainer}>
              <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
              />
          </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Go to Profile"
                  onPress={() => navigation.navigate('Profile')}
                />
              </View>
                 
        </View>
  
  );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink' // Cor fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
  
    buttonContainer: {
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },
    
});