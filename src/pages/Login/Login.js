import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import logo from './../../utils/images/Logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Something went wrong');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      
      // Save the token or user data as needed
      // For example, you might save it to localStorage
      // localStorage.setItem('token', data.token);
      
      // Redirect to the profile or home page
      navigate('/profile');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message);
    }
  };

  const handleGoogleSuccess = async (response) => {
    console.log('Google login successful:', response);
    // Implement your login logic here
    // For example, send the token to your server for validation and further processing
    const { tokenId } = response;
    try {
      const res = await fetch('http://localhost:5000/api/users/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokenId }),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || 'Something went wrong');
      }

      const data = await res.json();
      console.log('Google login server response:', data);
      // Save the token or user data as needed
      // localStorage.setItem('token', data.token);
      navigate('/profile');
    } catch (error) {
      console.error('Google login error:', error);
      setError(error.message);
    }
  };

  const handleGoogleFailure = (response) => {
    console.error('Google login failed:', response);
    setError('Google login failed. Please try again.');
  };

  return (
    <>
      <div className='pt-5 registration-page'>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form onSubmit={handleSubmit} className="form bg-white shadow-md rounded mt-4 px-5 pt-3 pb-5 mb-4">
            <div className="flex justify-center mb-4">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Login</h3>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="btn-reg btn-login bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <h6 className='pt-2'>If you have not registered? <Link to="/registration" className='ms-1 fs-6'>Registration</Link></h6>
             <div className="flex items-center justify-center mt-4">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your actual client ID
            buttonText="Login with Google"
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            cookiePolicy={'single_host_origin'}
          />
        </div>
          </form>
        </div>
       
      </div>
    </>
  );
};

export default Login;
