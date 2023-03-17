import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle sign-in here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label htmlFor="email" className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label htmlFor="password" className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button type="submit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignIn;