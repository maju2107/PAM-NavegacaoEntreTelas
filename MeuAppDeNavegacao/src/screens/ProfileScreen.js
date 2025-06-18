import React from 'react';
import { View, Text, Button,Image } from 'react-native';
import styles from '../../style/style';
import minhaImagem4 from '../../assets/fundo4.png';



export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.containerConjunto}>
            <Text style={styles.titleConjunto}>Profile Screen</Text>
            <View style={styles.buttonContainerConjunto}>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainerConjunto}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <Image
                source={minhaImagem4}
                style={styles.fundo}
            />  
        </View>
    );
}

