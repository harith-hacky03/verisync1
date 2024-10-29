import React, { useEffect, useState } from 'react';
import init, { get_pass_hash } from '../pkg/zk_wasm.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  useEffect(() => {
    const load = async () => {
      await init();
    };
    load();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = get_pass_hash(password);
    console.log('Hashed Password:', hashedPassword);
    
    // Prepare the data to be sent
    const userData = {
      username: username,
      password: hashedPassword, // Use the hashed password
    };

    try {
      const response = await axios.post('http://localhost:3001/users', userData);
      console.log('Response from server:', response.data);
      setSubmitted(true);
      setErrorMessage(''); // Clear any previous error messages
    } catch (error) {
      // Handle specific error messages based on the server response
      if (error.response) {
        if (error.response.status === 409) {
          setErrorMessage('Username already exists. Please choose another one.');
        } else if (error.response.status === 400) {
          setErrorMessage('Invalid input. Please check your details.');
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
        console.error('Error submitting form:', error.response.data);
      } else {
        setErrorMessage('Network error. Please try again later.');
        console.error('Error submitting form:', error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
        
        {submitted ? (
          <div>
            <p className="text-green-600 text-center font-semibold">Registration successful!</p>
            <div className='mt-2'>
              <Link to="/login" className='text-blue-600' >Login?</Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-gray-600 font-medium">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>
            {errorMessage && (
              <div className="text-red-600 text-center">{errorMessage}</div> // Display error message
            )}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-200"
            >
              Register
            </button>
            <div className='mt-2'>
              <Link to="/login" className='text-blue-600' >Login?</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
