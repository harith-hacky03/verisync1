// apiService.js
import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('https://backend-ashen-gamma.vercel.app/users', userData);
    return response;
  } catch (error) {
    throw error;
  }
};
