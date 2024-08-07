import React, { useState } from 'react';
import "./Registration.css";
import logo from "./../../utils/images/Logo.png";
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://adarsh-playground.000webhostapp.com/skt/api/v1/usercreate.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Registration successful!');
        setError('');
        console.log('Registration successful:', result);
        // Optionally, redirect to the login page or another page
      } else {
        setError(result.message || 'Registration failed. Please try again.');
        setSuccess('');
        console.error('Registration failed:', result);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      setSuccess('');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='pt-3 registration-page'>
        <form onSubmit={handleSubmit} className='form px-5 py-4 '>
          <img src={logo} alt='logo' className='logo' />
          <h3 className="text-3xl font-semibold mb-4 reg-hea">Registration Form</h3>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {success && <div className="text-green-500 mb-4">{success}</div>}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block mb-1">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border border-gray-400 px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border border-gray-400 px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-400 px-3 py-2 w-full"
              required
            />
          </div>
          <button type="submit" className="btn-reg bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register</button>
          <h6 className='pt-2'>If you have already registered? <Link to="/login" className='ms-1 fs-6'>Login</Link></h6>
        </form>
      </div>
    </>
  );
};

export default Registration;
