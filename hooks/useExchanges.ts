import { useState, useCallback, useEffect } from 'react';
import { fetchExchanges } from '@/api/coinApi';
import { Exchange } from '@/types/exchange';

// Hook personalizado para manejar la carga de intercambios
export const useExchanges = () => {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // Función para cargar los intercambios desde la API
  const loadExchanges = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchExchanges();
      setExchanges(data);
      setError(null);
    } catch (err) {
      const errorMessage = (err as Error).message || 'Unknown error';
      setError(errorMessage);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Carga los intercambios al montar el componente
  useEffect(() => {
    loadExchanges();
  }, [loadExchanges]);

  return { exchanges, loading, error, refreshing, loadExchanges };
};
