import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ErrorProps {
    message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
    },
});
