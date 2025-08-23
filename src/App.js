import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard"; // example private page
import ProtectedRoute from "./components/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import Scheme from "./components/Scheme";
import Assets from "./components/Assets";
import Questions from "./components/Questions";
import Engineer from "./components/Engineer";
import Zpmember from "./components/Zpmember";
import Blockincharge from "./components/Blockincharge";
import Survey from "./components/Survey";
import Block from "./components/Block";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login handler
  const handleLogin = (data) => {
    console.log("Login Success:", data);
    setIsAuthenticated(true);
  };

  // Signup handler
  const handleSignup = (data) => {
    console.log("Signup Success:", data);
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="flex">
        {/* Show sidebar only after login */}
        {isAuthenticated && <Sidebar />}

        <div className="flex-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/" element={<Signup onSignup={handleSignup} />} />

            {/* Private Routes */}

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <div className="ml-20 lg:ml-72">
                    <Dashboard />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/scheme"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <div className="ml-20 lg:ml-72">
                    <Scheme />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/assets"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <div className="ml-20 lg:ml-72">
                    <Assets />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/questions"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <div className="ml-20 lg:ml-72">
                    <Questions />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/engineer"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <div className="ml-20 lg:ml-72">
                    <Engineer />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/zpmember"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <div className="ml-20 lg:ml-72">
                    <Zpmember />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/block-incharge"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <div className="ml-20 lg:ml-72">
                    <Blockincharge />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/survey"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <div className="ml-20 lg:ml-72">
                    <Survey />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/block"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <div className="ml-20 lg:ml-72">
                    <Block />
                  </div>
                </ProtectedRoute>
              }
            />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

