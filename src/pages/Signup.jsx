import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Placeholder API
      await axios.post("/api/login", { email, password });
      login({ email });
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleLogin}>
          <h2 className="text-3xl font-bold text-center">Login</h2>

          {error && <div className="alert alert-error">{error}</div>}

          <div className="form-control">
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className={`btn btn-primary ${loading ? "loading" : ""}`}>
              {loading ? "Loading..." : "Login"}
            </button>
          </div>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="link link-primary">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
