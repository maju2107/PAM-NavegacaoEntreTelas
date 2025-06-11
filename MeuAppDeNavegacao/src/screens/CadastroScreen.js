import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;

export default function CadastroScreen({ navigation }) {

    const [Email, setEmail] = useState('');
    const [NomeUsuario, setNomeUsuario] = useState('');
    const [Senha, setSenha] = useState('');

    // const SalvarCadastro = async() => {
    //     try {
    //         await AsyncStorage.setItem("NomeUsuario", NomeUsuario);
    //         await AsyncStorage.setItem("Senha", Senha);
    //         await AsyncStorage.setItem("Email", Email);
    //         console.log("Dados salvos com muito sucesso!");
    //     } catch (error){
    //         console.log("O erro é:", error);
    //     }

    // }
    
    return (
        <ScrollView style={styles.all}>
            <View style={styles.container}>
                <Text style={styles.title}>Cadastre-se!</Text>

                <TextInput style={styles.input}
                    placeholder='Nome de usuário:'
                    value={NomeUsuario}
                    onChangeText={novoNomeUsuario => setNomeUsuario(novoNomeUsuario)}
                />
                <TextInput style={styles.input}
                    placeholder='e-mail:'
                    value={Email}
                    onChangeText={novoEmail => setEmail(novoEmail)}
                />
                <TextInput style={styles.input}
                    placeholder='senha:'
                    value={Senha}
                    onChangeText={novaSenha => setSenha(novaSenha)}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Cadastrar"
                        onPress={navigation.navigate('Login')}
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
        backgroundColor: '#f0f8ff', // Cor de fundo do container do botão
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