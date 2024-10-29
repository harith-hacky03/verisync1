// apiService.js
import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('https://backend-su55.onrender.com/users', userData);
    return response;
  } catch (error) {
    throw error;
  }
};
