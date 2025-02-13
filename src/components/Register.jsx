/* TODO - add your code to create a functional React component that renders a registration form */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setToken, token }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      console.log("Register response:", result);
      console.log("New user token (result.token):", result.token);
      setToken(result.token);
      localStorage.setItem("token", result.token);

      if (response.ok) {
        setMessage("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(result.message || "Registration failed.");
      }
    } catch (err) {
      setMessage("An error occurred:", err.message);
    }
  };

  if (token) {
    navigate("/account");
  }

  return (
    <div className="register-container">
      <h2>Sign Up Here:</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
