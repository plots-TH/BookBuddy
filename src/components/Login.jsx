/* TODO - add your code to create a functional React component that renders a login form */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login({ setToken, token }) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );
      const result = await response.json();
      console.log("Login response:", result);
      setToken(result.token);
      localStorage.setItem("token", result.token);

      if (response.ok && result.token) {
        setToken(result.token);
        localStorage.setItem("token", result.token);
        setMessage("Login successful! Redirecting...");
        setTimeout(() => navigate("/"), 1000); // Redirect to home after 2 sec
      } else {
        setMessage(result.message || "Login failed.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  if (token) {
    navigate("/account");
  }

  return (
    <div className="register-container">
      <h2>Login</h2>
      {message && (
        <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Sign Up Here!</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
