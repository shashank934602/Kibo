import React from "react";

function UserPage({ user }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">User Profile</h2>
        <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> {user?.email}</p>
        <p className="text-lg text-gray-700"><strong>Status:</strong> Active</p>
      </div>
    </div>
  );
}

export default UserPage;
