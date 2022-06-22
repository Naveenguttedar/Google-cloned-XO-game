import React from "react";
import { motion } from "framer-motion";
function X() {
  return (
    <svg
      className="xo-x"
      aria-label="X"
      role="img"
      viewBox="0 0 128 128"
      stroke="rgb(84, 84, 84)"
      fill="black"
      style={{ width: "65px", strokeWidth: "20px" }}
    >
      <motion.path
        d="M16,16L112,112"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, transition: { duration: 0.5 } }}
      />
      <motion.path
        d="M112,16L16,112"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: 1,
          transition: { type: "spring", duration: 0.5, delay: 0.5 },
        }}
      />
    </svg>
  );
}

export default X;
