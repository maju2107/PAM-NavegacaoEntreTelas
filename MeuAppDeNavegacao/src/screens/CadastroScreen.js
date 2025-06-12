import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;

export default function CadastroScreen({ navigation }) {
    
    const [NomeUsuario, setNomeUsuario] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    const salvarCadastro = async() => {
            try {
                const usuario = {NomeUsuario,Email,Senha};
                await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
                console.log("Dados salvos com muito sucesso!");
            } catch (error){
                console.log("Erro ao salvar cadastro do Usuário:", error);
            }

    };
    
    return (
        <ScrollView style={styles.all}>
            <View style={styles.container}>
                <Text style={styles.title}>Cadastre-se!</Text>

                <TextInput style={styles.input}
                    placeholder='Nome de usuário:'
                    value={NomeUsuario}
                    onChangeText={(text) => setNomeUsuario(text)}
                />
                <TextInput style={styles.input}
                    placeholder='e-mail:'
                    value={Email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput style={styles.input}
                    placeholder='senha:'
                    value={Senha}
                    onChangeText={(text) => setSenha(text)}
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Cadastrar"
                        onPress={async () => {
                            if (!NomeUsuario || !Email || !Senha) {
                            console.log("Estes campos são obrigatórios");
                            } else {
                            await salvarCadastro(NomeUsuario,Email,Senha);
                            navigation.navigate('Login');
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