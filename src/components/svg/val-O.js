import React from "react";
import { motion } from "framer-motion";
function O() {
  const Ostyles = {
    fill: "none",
    strokeWidth: 20,
    width: 65,
  };
  const Ovariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1 } },
  };
  return (
    <svg
      className="xo-o"
      aria-label="O"
      role="img"
      viewBox="0 0 128 128"
      stroke="rgb(242, 235, 211)"
      style={Ostyles}
    >
      <motion.path
        d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"
        variants={Ovariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
}

export default O;
