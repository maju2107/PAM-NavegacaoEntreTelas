
import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, ScrollView,Image, BackHandler} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../style/style';
import minhaImagem2 from '../../assets/fundo2.png';


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

    useEffect ( () =>{
            const Bloquear = () => { // essa fução é chamada quando o botão "Voltar" é pressionado (globalmente)
                console.log("Não pode voltar a tela anterior");
                return true; // impede a ação de voltar
            };
            BackHandler.addEventListener('hardwareBackPress',Bloquear); // backHandler é uma API do React Native que intercepta 
                                                                        // os eventos do botão "Voltar" da barra de ferramentas
    
            return () => BackHandler.removeEventListener('hardwareBackPress',Bloquear); // o .add e o .remove capturam o evento do botão
        },[] ); 
    
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
                    placeholder='E-mail:'
                    value={Email}
                    onChangeText={setEmail}
                />
                <TextInput style={styles.input}
                    placeholder='Senha:'
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
                <Image
                    source={minhaImagem2}
                    style={styles.fundo}
                />  
            </View>
        </ScrollView>
        
    );
};

