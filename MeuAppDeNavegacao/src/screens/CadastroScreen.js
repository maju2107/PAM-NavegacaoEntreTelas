import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../style/style';

export default function CadastroScreen({ navigation }) {
    
    const [NomeUsuario, setNomeUsuario] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    const salvarCadastro = async() => {
            try {
                const usuario = {NomeUsuario,Email,Senha};
                await AsyncStorage.setItem('usuario', JSON.stringify(usuario)); // nosso querido AsyncStorage salva o objeto usuário criado
                console.log("Dados salvos com muito sucesso!");
                navigation.navigate('Login');
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
                    placeholder='E-mail:'
                    value={Email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput style={styles.input}
                    placeholder='Senha:'
                    value={Senha}
                    onChangeText={(text) => setSenha(text)}
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Cadastrar"
                        onPress={async () => {
                            if (!NomeUsuario || !Email || !Senha) { // só permite que o usuario vá para o Login se ele se cadastrar
                            console.log("Estes campos são obrigatórios");
                            } else {
                            await salvarCadastro(NomeUsuario,Email,Senha); // passa os params
                            }
                        }}
                    />
                </View>
            </View>
        </ScrollView>
        
    );
};

