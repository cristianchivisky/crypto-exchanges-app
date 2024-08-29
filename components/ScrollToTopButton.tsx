import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ScrollToTopButtonProps {
  show: boolean;
  onPress: () => void;
}

// Componente para un botón que desplaza la vista hacia arriba
export default function ScrollToTopButton({ show, onPress }: ScrollToTopButtonProps) {
  if (!show) return null; // No renderiza el botón si no se debe mostrar

  return (
    <TouchableOpacity style={styles.scrollTopButton} onPress={onPress}>
      <Text style={styles.scrollTopText}>↑</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  scrollTopButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  scrollTopText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
