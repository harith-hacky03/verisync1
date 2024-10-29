// apiService.js
import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:3001/users', userData);
    return response;
  } catch (error) {
    throw error;
  }
};
