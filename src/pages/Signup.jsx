import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup({ login }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Placeholder API
      await axios.post("/api/signup", { name, email, password });

      // save user and redirect
      login({ name, email });
      navigate("/dashboard");
    } catch (err) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSignup}>
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>

          {error && <div className="alert alert-error">{error}</div>}

          {/* Name */}
          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Button */}
          <div className="form-control mt-6">
            <button className={`btn btn-primary ${loading ? "loading" : ""}`}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>

          {/* Link to Login */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
