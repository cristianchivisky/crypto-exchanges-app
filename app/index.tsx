import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, FlatList, Animated, RefreshControl, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useExchanges } from '@/hooks/useExchanges';
import ExchangeCard from '@/components/ExchangeCard';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import Header from '@/components/Header';
import SearchAndSort from '@/components/SearchAndSort';
import ScrollToTopButton from '@/components/ScrollToTopButton';

// Componente principal que muestra una lista de intercambios con soporte para búsqueda, ordenamiento y desplazamiento.
export default function Index() {
  const { exchanges, loading, error, refreshing, loadExchanges } = useExchanges();
  const [displayedExchanges, setDisplayedExchanges] = useState(exchanges);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  // Actualiza la lista de intercambios cuando los datos cambian
  useEffect(() => {
    setDisplayedExchanges(exchanges);  // Inicializa con los datos originales
  }, [exchanges]);

  // Muestra un componente de carga mientras los datos están siendo obtenidos
  if (loading && !refreshing) return <Loading />;

  // Muestra un componente de error en caso de fallos
  if (error) return <Error message={error} onRetry={loadExchanges} />;

  // Controla el evento de desplazamiento para mostrar el botón de volver al inicio
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  // Maneja el evento cuando el desplazamiento termina
  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowScrollTopButton(offsetY > 200); // Muestra el botón si se desplaza más de 200 unidades
  };

  // Desplaza la lista al inicio
  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    setShowScrollTopButton(false);
  };

  return (
    <View style={styles.container}>
      <Header title="Exchanges de Criptomonedas" onReload={loadExchanges} />
      <SearchAndSort exchanges={exchanges} onSearchChange={setDisplayedExchanges} />
      <FlatList
        ref={flatListRef}
        data={displayedExchanges}
        renderItem={({ item }) => <ExchangeCard exchange={item} />}
        keyExtractor={(item) => item.exchange_id}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleScrollEnd}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadExchanges} />
        }
        ListHeaderComponent={<View style={styles.listHeader} />}
        contentContainerStyle={styles.listContent}
      />
      <ScrollToTopButton show={showScrollTopButton} onPress={scrollToTop} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', 
  },
  listHeader: {
    paddingTop: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
});
