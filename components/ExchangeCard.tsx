import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Exchange } from '@/types/exchange';

interface ExchangeCardProps {
    exchange: Exchange;
}

// Componente para mostrar detalles de un intercambio en una tarjeta
export default function ExchangeCard({ exchange }: ExchangeCardProps) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{exchange.name}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Volumen 1 Hora (USD):</Text>
                    <Text style={styles.infoValue}>${exchange.volume_1hrs_usd.toLocaleString()}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Volumen 1 Día (USD):</Text>
                    <Text style={styles.infoValue}>${exchange.volume_1day_usd.toLocaleString()}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      },
    cardContent: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        borderRadius: 15,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
      },
      infoLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
      },
      infoValue: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
  
