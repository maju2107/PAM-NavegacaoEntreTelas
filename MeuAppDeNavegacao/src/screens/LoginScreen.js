// Criar a tela de Login e deixar ela como 1ª tela do App.js;
//Objetos da tela de login: 2 campos (login/senha) e botão "Entrar";
//Criar navegação entre as telas: Home, Details e Profile;
//Na tela de Home retirar a opção "Goback" (final do pdf);
//Verificar se o usuário digitou o login e a senha corretamente;

import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, ScrollView, Alert } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const usuario = { 
    email: "maria",
    senha: "1234"
};

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const validarLogin = () => {  // fazer a validação do login, comparando senha e email
        if(email==usuario.email && senha==usuario.senha){
            navigation.navigate('Home');
        } else {
            console.log("Seu login está erradinho!");
        }
    };
    
    return (
        <ScrollView style={styles.all}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input}
                    placeholder='e-mail:'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput style={styles.input}
                    placeholder='senha:'
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Logar"
                        onPress={validarLogin}
                    />
                </View>
            </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({

    all :{
        backgroundColor: '#f0f8ff',
        marginTop: 300
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: windowWidth * 1.0, 
        backgroundColor: '#f0f8ff' // Cor fundo da tela
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

    input: {
        borderColor: 'gray',
        borderWidth: 3,
        width: windowWidth * 0.7,
        padding:20,
        marginBottom: 10
    }
});