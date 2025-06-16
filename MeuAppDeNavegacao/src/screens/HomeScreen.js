import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import styles from '../../style/style';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
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

