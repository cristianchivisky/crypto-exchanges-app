import React from 'react';
import { View, ActivityIndicator, StyleSheet, Animated } from 'react-native';

// Componente que muestra un indicador de carga animado
export default function Loading() {
  const scaleValue = new Animated.Value(1);

  // Animación de pulso para el indicador de carga
  Animated.loop(
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.5,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <View style={styles.loaderContainer}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <ActivityIndicator size="large" color="#4a90e2" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7', 
  },
});
