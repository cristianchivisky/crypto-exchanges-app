import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Exchange } from '@/types/exchange';

interface SearchAndSortProps {
  exchanges: Exchange[];
  onSearchChange: (filteredExchanges: Exchange[]) => void;
}

// Componente que permite buscar y ordenar los intercambios.
export default function SearchAndSort({ exchanges, onSearchChange }: SearchAndSortProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAscending, setIsAscending] = useState<boolean | null>(null);  

  // Filtra y ordena los intercambios cada vez que cambia la búsqueda o el orden
  useEffect(() => {
    filterAndSortExchanges();
  }, [searchQuery, isAscending, exchanges]);

  // Filtra y ordena la lista de intercambios basada en la búsqueda y el orden
  const filterAndSortExchanges = () => {
    const filteredExchanges = exchanges.filter((exchange) =>
      exchange.name ? exchange.name.toLowerCase().includes(searchQuery.toLowerCase()) : false
    );

    const sortedExchanges = isAscending === null
      ? filteredExchanges  
      : isAscending
      ? [...filteredExchanges].sort((a, b) => (a.name || '').localeCompare(b.name || ''))
      : [...filteredExchanges].sort((a, b) => (b.name || '').localeCompare(a.name || ''));

    onSearchChange(sortedExchanges);
  };

  // Actualiza la consulta de búsqueda
  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  // Alterna el orden de clasificación
  const toggleSortOrder = () => {
    setIsAscending(isAscending === null ? true : !isAscending);  
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por nombre"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <TouchableOpacity style={styles.sortButton} onPress={toggleSortOrder}>
        <Text style={styles.sortButtonText}>
          {isAscending === null ? 'A-Z' : isAscending ? 'Z-A' : 'A-Z'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  sortButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  sortButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
