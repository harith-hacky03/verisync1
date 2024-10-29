import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Typically, you’d send formData to a backend here
    console.log('Submitted Data:', formData);
    setSubmitted(true);
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      {submitted ? (
        <p>Registration successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;
