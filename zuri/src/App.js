import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";

function Home() {
  return (
    <div className="welcome-container">
      <img src="/zuri-logo.png" alt="Zuri Logo" className="logo" />
      <h1 className="welcome-text">Welcome to Zuri</h1>

      {/* Vendor & Patron Login/Signup Sections */}
      <div className="auth-section">
        <div className="auth-box">
          <h2>Vendors</h2>
          <Link to="/vendor-login" className="btn">Log In</Link>
          <Link to="/vendor-signup" className="btn">Sign Up</Link>
        </div>
        
        <div className="auth-box">
          <h2>Patrons</h2>
          <Link to="/patron-login" className="btn">Log In</Link>
          <Link to="/patron-signup" className="btn">Sign Up</Link>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Zuri</h2>
        <p>
          Zuri is a platform that connects Vendors and Patrons for party planning and event services.
        </p>
        
        <div className="about-columns">
          <div className="about-box">
            <h3>Vendors</h3>
            <p>
              Vendors are businesses and professionals who offer services such as catering, DJs, 
              photographers, and more. They can list their services on Zuri for customers to book.
            </p>
          </div>
          
          <div className="about-box">
            <h3>Patrons</h3>
            <p>
              Patrons are individuals looking to book services for events such as birthdays, weddings, 
              and celebrations. They can explore and hire vendors directly from the Zuri platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-login" element={<Login userType="vendor" />} />
        <Route path="/vendor-signup" element={<SignUp userType="vendor" />} />
        <Route path="/patron-login" element={<Login userType="patron" />} />
        <Route path="/patron-signup" element={<SignUp userType="patron" />} />
      </Routes>
    </Router>
  );
}

export default App;
