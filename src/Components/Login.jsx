// src/components/LoginForm.js
import React, { useEffect, useState } from 'react';
import init, { generate_proof,verify_proof } from '../pkg/zk_wasm.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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
    const proof = await generate_proof(username, password);

    const userData = {
        username: username,
        proof: proof 
    };

    try {
        const response = await axios.post('http://localhost:3001/loginUser', userData);
        if( response.data.code == -1 ){
            setError("User Doesn't Exist")
        }
        else{
            const isVerified = verify_proof(proof, response.data, username);
            setSubmitted(true);
            setError('');
        }
    } catch (error) {
        setSubmitted(false);
        setError('Login failed. Please check your credentials.');
    }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        
        {submitted ? (
          <p className="text-green-600 text-center font-semibold">Login successful!</p>
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
            {error && <p className="text-red-600 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-2  bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-200"
            >
              Login
            </button>
            <div className='mt-2'>
                <Link to="/" className="text-blue-600">Register?</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
