import React, {useEffect} from 'react';
import { View, Text, Button, BackHandler} from 'react-native';
import styles from '../../style/style';


export default function HomeScreen({ navigation }) {
    useEffect ( () =>{
        const Bloquear1 = () => { // essa fução é chamada quando o botão "Voltar" é pressionado (globalmente)
            console.log("Não pode voltar a tela anterior");
            return true; // impede a ação de voltar
        };
        BackHandler.addEventListener('hardwareBackPress',Bloquear1); // backHandler é uma API do React Native que intercepta 
                                                                    // os eventos do botão "Voltar" da barra de ferramentas

        return () => BackHandler.removeEventListener('hardwareBackPress',Bloquear1); // o .add e o .remove capturam o evento do botão
    },[] );

    return (
        <View style={styles.containerConjunto}>
            <Text style={styles.titleConjunto}>Home Screen</Text>
            <View style={styles.buttonContainerConjunto}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={styles.buttonContainerConjunto}>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
            <View style={styles.buttonContainerConjunto}>
                <Button
                    title="Fazer Logout"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}

