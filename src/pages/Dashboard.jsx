import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user, logout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" }); // placeholder
    } catch (err) {
      console.log("Logout error", err);
    }
    logout();
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-500 to-red-400">
      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-2xl font-bold text-white mb-6">Welcome, {user?.email}</h1>
        <Button text="Logout" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Dashboard;
