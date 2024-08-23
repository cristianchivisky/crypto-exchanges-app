import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Details() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Detalles de Exchange</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4a90e2',
    },
});
