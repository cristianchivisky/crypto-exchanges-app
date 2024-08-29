import { COIN_API_URL } from '@/constants/index'
import { Exchange } from '@/types/exchange';

// Función para obtener intercambios desde la API de CoinAPI
export const fetchExchanges = async (): Promise<Exchange[]> => {

    // Verifica si la clave de API está disponible
    if (!process.env.EXPO_PUBLIC_COIN_API_KEY) {
        throw new Error('API key is missing.');
    }

    // Realiza la solicitud a la API
    const response = await fetch(COIN_API_URL, {
        headers: {
            'X-CoinAPI-Key': process.env.EXPO_PUBLIC_COIN_API_KEY,
        },
    });

    // Maneja errores en la respuesta
    if (!response.ok) {
        throw new Error(`Fallo en la llamada a la API: ${response.status}`);
    }

    // Devuelve los datos obtenidos de la API
    const data: Exchange[] = await response.json();
    return data;
}
