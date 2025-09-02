import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96 max-w-full">
      {children}
    </div>
  );
};

export default Card;
