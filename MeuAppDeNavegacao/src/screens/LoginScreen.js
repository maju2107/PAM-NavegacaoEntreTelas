// Criar a tela de Login e deixar ela como 1ª tela do App.js;
//Objetos da tela de login: 2 campos (login/senha) e botão "Entrar";
//Criar navegação entre as telas: Home, Details e Profile;
//Na tela de Home retirar a opção "Goback" (final do pdf);
//Verificar se o usuário digitou o login e a senha corretamente;

import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, ScrollView, Alert } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen({ navigation }) {

        const [NomeUsuario, setNomeUsuario] = useState('');
        const [Email, setEmail] = useState('');
        const [Senha, setSenha] = useState('');
    
        const validarLogin = async(NomeUsuarioDigitado,EmailDigitado,SenhaDigitada) => {  // fazer a validação do login
        try{
            const usuarioSalvo = await AsyncStorage.getItem('usuario');
            if(usuarioSalvo){
                const {NomeUsuario,Email,Senha} = JSON.parse(usuarioSalvo);
                 if(NomeUsuario == NomeUsuarioDigitado && Email == EmailDigitado && Senha == SenhaDigitada){
                     console.log("Seu login está certinho!");
                }else{
                     console.log("Seu login está erradinho!");
                }
            }else{
                console.log("Nenhum usuário cadastrado");
            }
        }catch(error){
            console.log("Erro ao validar o Login:", error);
        }
    };
    
    return (
        <ScrollView style={styles.all}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input}
                    placeholder='Nome de usuário:'
                    value={NomeUsuario}
                    onChangeText={setNomeUsuario}
                />
                <TextInput style={styles.input}
                    placeholder='e-mail:'
                    value={Email}
                    onChangeText={setEmail}
                />
                <TextInput style={styles.input}
                    placeholder='senha:'
                    value={Senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Logar"
                        onPress={async () => {
                            await validarLogin();
                            navigation.navigate('Home');
                        }}
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