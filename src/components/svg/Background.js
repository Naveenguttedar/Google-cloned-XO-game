import React from "react";
import { motion } from "framer-motion";
function Background() {
  const boardSvgStyles = {
    position: "absolute",
    left: -11,
    top: -18,
  };
  const animateUp = {
    hidden: { pathLength: 1, pathOffset: 1 },
    visible: { pathLength: 1, pathOffset: 0, transition: { duration: 0.5 } },
  };
  const animateDown = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 0.5 } },
  };
  const boardSvgVarients = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.svg
      width="347"
      height="355"
      viewBox="0 0 347 355"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={boardSvgStyles}
      variants={boardSvgVarients}
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M110 21V163"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="5px"
        variants={animateUp}
      />
      <motion.path
        d="M161 119L11 119"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="5px"
        variants={animateDown}
      />
      <motion.path
        d="M161 219H11"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="5px"
        variants={animateDown}
      />
      <motion.path
        d="M319 119L161 119"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="5px"
        variants={animateUp}
      />
      <motion.path
        d="M319 219H161"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="5px"
        variants={animateUp}
      />
      <motion.path
        d="M214 21V163"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="5px"
        variants={animateUp}
      />
      <motion.path
        d="M110 163V323"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="5px"
        variants={animateDown}
      />
      <motion.path
        d="M214 163V323"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="5px"
        variants={animateDown}
      />
    </motion.svg>
  );
}

export default Background;
