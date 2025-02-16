import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Remove useParams
import "./Login.css";

function Login() {
  const location = useLocation();
  const userType = location.pathname.includes("vendor") ? "Vendor" : "Patron";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${userType} Login - Username: ${username}, Password: ${password}`);
    // Add authentication logic here
  };

  return (
    <div className="login-container">
      <Link to="/" className="return-btn">← Back</Link>
      <h1>{userType} Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Log In</button>
      </form>
    </div>
  );
}

export default Login;



