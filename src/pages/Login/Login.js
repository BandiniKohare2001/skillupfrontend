import React, { useState } from 'react';
import logo from "./../../utils/images/Logo.png";
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(formData);
  };

  return (
  <>
     <div className='pt-5 registration-page'>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="form bg-white shadow-md rounded mt-4 px-5 pt-3  pb-5 mb-4">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <h3 className="text-2xl font-semibold mb-6 text-center">Login</h3>
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
            className=" btn-reg btn-login bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
        <h6 className='pt-2'>If you have not registered ?  <Link to="/registration" className='ms-1 fs-6'>Registration</Link></h6>
      </form>
    </div>
     </div>
  </>
  );
};

export default Login;
