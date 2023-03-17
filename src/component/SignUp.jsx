import { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here with Firebase Authentication
  }

  return (
    <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-white font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="********"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUp