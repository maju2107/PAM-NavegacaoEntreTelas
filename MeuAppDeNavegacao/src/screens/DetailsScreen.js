import React from 'react';
import { View, Text, Button,Image } from 'react-native';
import styles from '../../style/style';
import minhaImagem3 from '../../assets/fundo3.png';


export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.containerConjunto}>
            <Text style={styles.titleConjunto}>Details Screen</Text>
            <View style={styles.buttonContainerConjunto}>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainerConjunto}>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
            <Image
                source={minhaImagem3}
                style={styles.fundo}
            />  
        </View>
    );
}

