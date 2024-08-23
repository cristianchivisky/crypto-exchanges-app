import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ExchangeCardProps {
    exchange: {
        exchange_id: string;
        name: string;
        volume_1hrs_usd: number;
        volume_1day_usd: number;
    };
    index: number;
}

export default function ExchangeCard({ exchange }: ExchangeCardProps) {
    return (
        <View key={exchange.exchange_id} style={styles.cardContainer}>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{exchange.name}</Text>
                <Text style={styles.cardSubtitle}>Volumen 1 Hora (USD): {exchange.volume_1hrs_usd}</Text>
                <Text style={styles.cardSubtitle}>Volumen 1 Día (USD): {exchange.volume_1day_usd}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 12, 
        overflow: 'hidden',
        backgroundColor: '#fff', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 6,
        elevation: 5, 
    },
    cardContent: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 16, 
    },
    cardTitle: {
        color: '#fff',
        fontSize: 20, 
        fontWeight: 'bold',
    },
    cardSubtitle: {
        color: '#fff',
        fontSize: 16, 
        marginTop: 4,
    },
  });
  
