import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const location = useLocation();
  const userType = location.pathname.includes("vendor") ? "Vendor" : "Patron";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showTerms, setShowTerms] = useState(false); // State for modal visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${userType} Sign Up - Username: ${username}, Email: ${email}, Password: ${password}`);
    // Add registration logic here
  };

  return (
    <div className="signup-container">
      <Link to="/" className="return-btn">← Back</Link>
      <h1>{userType} Sign Up</h1>
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
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        {/* Terms of Service Link */}
        <p className="terms-text">
          By signing up, you agree to our{" "}
          <span className="terms-link" onClick={() => setShowTerms(true)}>
            Terms of Service
          </span>.
        </p>

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Terms of Service</h2>
            <p>
              Welcome to Zuri! By signing up, you agree to our rules and policies. 
              We ensure data protection and respect vendor-client interactions.
            </p>
            <button className="close-modal" onClick={() => setShowTerms(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;


