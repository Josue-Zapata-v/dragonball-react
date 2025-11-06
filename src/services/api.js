import axios from 'axios';

const BASE_URL = 'https://dragonball-api.com/api'; 

export const getCharacters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/characters`);
    return response.data.items; 
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};
