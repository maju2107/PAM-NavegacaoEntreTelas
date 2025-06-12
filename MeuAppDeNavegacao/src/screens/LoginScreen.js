
import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, ScrollView, Alert } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen({ navigation }) {

        const [NomeUsuario, setNomeUsuario] = useState('');
        const [Email, setEmail] = useState('');
        const [Senha, setSenha] = useState('');
    
        const validarLogin = async(NomeUsuarioDigitado,EmailDigitado,SenhaDigitada) => {  // fazer a validação do login comparando o que ele digitou com o que estava cadastrado
        try{
            const usuarioSalvo = await AsyncStorage.getItem('usuario'); // o AsyncStorage retorno o objeto usuario criado lá no cadastro com a ajuda do JSON
            if(usuarioSalvo){ // vê se o login do usuario foi salvo
                const {NomeUsuario,Email,Senha} = JSON.parse(usuarioSalvo);
                 if(NomeUsuario == NomeUsuarioDigitado && Email == EmailDigitado && Senha == SenhaDigitada){
                     console.log("Seu login está certinho!"); 
                     navigation.navigate('Home');
                }else{
                     console.log("Seu login está erradinho!");
                }
            }else{
                console.log("Nenhum usuário cadastrado"); // tem este console, mas só vai para o login se o usuário se cadastrar, mas tudo bem 
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
                            if (!NomeUsuario || !Email || !Senha) {  // só permite ir para a ir para A Home se tiver preenchido todos os campos do Login
                            console.log("Estes campos são obrigatórios");
                            } else {
                             validarLogin(NomeUsuario,Email,Senha); // teve que passar os params 
                            }
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