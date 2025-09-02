import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, onClick, loading }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={loading}
      className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg disabled:opacity-60"
    >
      {loading ? "Loading..." : text}
    </motion.button>
  );
};

export default Button;
