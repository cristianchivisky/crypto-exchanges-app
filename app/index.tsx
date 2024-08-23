import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { fetchExchanges } from '@/api/coinApi';
import ExchangeCard from '@/components/ExchangeCard';
import Loading from '@/components/Loading';
import Error from '@/components/Error';

interface Exchange {
  exchange_id: string;
  name: string;
  volume_1hrs_usd: number;
  volume_1day_usd: number;
}

export default function Index() {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadExchanges = async () => {
    try {
      setLoading(true); 
      const data = await fetchExchanges();
      setExchanges(data);
    } catch (err) {
      const errorMessage = (err as Error).message || 'Error desconocido';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExchanges();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const renderExchange = ({ item, index }: { item: Exchange; index: number }) => (
    <ExchangeCard key={item.exchange_id} exchange={item} index={index} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={loadExchanges} >
          <Text style={styles.title}>Exchanges de Criptomonedas</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={exchanges} 
        renderItem={renderExchange}
        keyExtractor={(item) => item.exchange_id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', 
  },
  header: {
    padding: 20,
    backgroundColor: '#4a90e2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', 
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
    marginVertical: 2,
  },
});
