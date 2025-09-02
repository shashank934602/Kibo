import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, logout }) {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold text-primary">
          KiboTech
        </Link>
      </div>
      <div className="flex-none gap-4">
        {user ? (
          <>
            <Link to="/dashboard" className="btn btn-ghost">Dashboard</Link>
            <Link to="/user" className="btn btn-ghost">User</Link>
            <button onClick={logout} className="btn btn-error text-white">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-outline">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
