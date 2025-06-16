import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import styles from '../../style/style';

const windowWidth = Dimensions.get('window').width;

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
        </View>
    );
}

