import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to KiboTech</h1>
          <p className="py-6 text-lg text-gray-600">
            Your modern solution for AI-driven technology
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-outline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
