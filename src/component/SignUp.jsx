import { useState } from "react";
import { auth } from "../firebase";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here with Firebase Authentication
  }

  return (
    <div className="rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-medium mb-4">Sign up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-white font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border rounded-lg py-2 px-3 w-full"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded-lg py-2 px-3 w-full"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border rounded-lg py-2 px-3 w-full"
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            className="mr-2"
            type="checkbox"
            name="agree"
            id="agree"
            required
          />
          <label className="text-white font-medium" htmlFor="agree">
            I agree to the terms and conditions
          </label>
        </div>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg py-2 px-4">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
