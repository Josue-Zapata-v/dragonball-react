import axios from 'axios';

const BASE_URL = 'https://dragonball-api.com/api'; // Ajustar según la documentación oficial

export const getCharacters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/characters`);
    return response.data; // Ajustar según la respuesta real de la API
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};
