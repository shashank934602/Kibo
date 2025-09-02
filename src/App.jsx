import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import User from "./pages/UserPage";

function App() {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout user={user} logout={logout}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout user={user} logout={logout}>
              <Login login={login} />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout user={user} logout={logout}>
              <Signup login={login} />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout user={user} logout={logout}>
              <Dashboard user={user} />
            </Layout>
          }
        />
        <Route
          path="/user"
          element={
            <Layout user={user} logout={logout}>
              <User user={user} />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
