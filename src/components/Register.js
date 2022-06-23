import { useState } from "react";
import React from "react";
import { useAuth } from "./context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "./Alert";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold my-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="youremail@hotmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold my-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="******"
          />
        </div>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bol text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
  Already have an Account?<Link to="/Login">Login</Link>
</p>
    </div>
  );
};
