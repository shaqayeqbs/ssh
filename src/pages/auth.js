import React, { useState } from 'react';

const SignupLogin = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', phoneNumber: '' });
  const [errors, setErrors] = useState({ email: '', password: '', phoneNumber: '' });

  const handleFormToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Reset previous errors
    setErrors({ email: '', password: '', phoneNumber: '' });

    // Validation logic
    let hasError = false;
    if (!formData.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
      hasError = true;
    }

    if (!formData.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
      hasError = true;
    }

    if (isSignup && !formData.phoneNumber) {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: 'Phone Number is required' }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // TODO: Handle form submission, including API requests to your Strapi backend
  };

  return (
    <div className="flex flex-col -mt-20 items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">
        {isSignup ? 'Sign Up' : 'Log In'}
      </h1>
      <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={
              
              (e) =>{
                setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
                setFormData({ ...formData, email: e.target.value })
              }
              
              
             
            }
            className={`w-full p-2 border rounded focus:outline-none ${
              errors.email ? 'border-onError' : 'focus:border-primary'
            }`}
          />
          {errors.email && <p className="text-onError text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>{
              setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
              setFormData({ ...formData, password: e.target.value })
            } 
             
            }
            className={`w-full p-2 border rounded focus:outline-none ${
              errors.password ? 'border-onError' : 'focus:border-primary'
            }`}

          />
          {errors.password && <p className="text-onError text-sm">{errors.password}</p>}
        </div>
        {isSignup && (
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => {
                setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }));
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              
              }
              className={`w-full p-2 border rounded focus:outline-none ${
                errors.phoneNumber ? 'border-onError' : 'focus:border-primary'
              }`}
              
            />
            {errors.phoneNumber && <p className="text-onError text-sm">{errors.phoneNumber}</p>}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded hover:bg-secondary transition-colors"
        >
          {isSignup ? 'Sign Up' : 'Log In'}
        </button>
      </form>
      <button
        onClick={handleFormToggle}
        className="mt-4 text-primary hover:text-secondary"
      >
        {isSignup ? 'Already have an account? Log in' : 'Don\'t have an account? Sign up'}
      </button>
    </div>
  );
};

export default SignupLogin;
