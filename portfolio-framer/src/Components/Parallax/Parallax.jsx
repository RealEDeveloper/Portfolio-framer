import React, { useRef } from 'react';
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Services from "../Services/Services";

const Parallax = ({ type }) => {
  const ref = useRef();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform scrollYProgress to control the vertical movement and visibility of the Services component
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  
  // Control the horizontal position and opacity of the Services component
  const xServices = useTransform(scrollYProgress, [0, 0.5, 1], ["-100%", "0%", "0%"]);
  const opacityServices = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: type === "services"
          ? "linear-gradient(180deg, #0c0c1d, #111132)"
          : "linear-gradient(180deg, #505064, #111132)"
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "My Work" : "My Projects"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
      <motion.div
        style={{
          x: xServices,
          opacity: opacityServices,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Services />
      </motion.div>
    </div>
  );
};

export default Parallax;