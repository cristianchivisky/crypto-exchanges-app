import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

interface HeaderProps {
  title: string;
  onReload: () => void;
}

// Componente de encabezado que muestra un título que es un botón para recargar los datos.
const Header: React.FC<HeaderProps> = ({ title, onReload }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onReload}>
        <Text style={styles.title}>{title}</Text>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
      padding: 20,
      backgroundColor: '#4a90e2',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 8,
      marginBottom: 6,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
      textShadowColor: 'rgba(0, 0, 0, 0.4)',
      textShadowOffset: { width: 0, height: 3 },
      textShadowRadius: 4,
      marginVertical: 5,
    },
});
export default Header;
