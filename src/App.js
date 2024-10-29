// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/Login';
import RegistrationForm from './Components/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
