export const COIN_API_URL = 'https://rest.coinapi.io/v1/exchanges';

interface Exchange {
    exchange_id: string;
    name: string;
    volume_1hrs_usd: number;
    volume_1day_usd: number;
}

export const fetchExchanges = async (): Promise<Exchange[]> => {

    if (!process.env.COIN_API_KEY) {
        throw new Error('API key is missing.');
    }

    const response = await fetch(COIN_API_URL, {
        headers: {
            'X-CoinAPI-Key': process.env.COIN_API_KEY,
        },
    });

    if (!response.ok) {
        throw new Error('Error en la llamada a la API');
    }

    const data: Exchange[] = await response.json();
    return data;
}
