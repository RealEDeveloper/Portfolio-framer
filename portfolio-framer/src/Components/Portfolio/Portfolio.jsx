import "./Portfolio.scss";
import React,{useRef} from 'react';
import {motion, useScroll, useSpring,useTransform} from "framer-motion";


const Single = ({ item }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        //offset:["start start","end start"]
    });


      const y = useTransform(scrollYProgress,[0,1],[-200,200]);

      return (
  <section >
     <div className ="container">
      <div className="wrapper">
        <div className="image-container" ref ={ref}>
        <img style ={{height:"400px",width:"600px" ,border:"0.5px solid grey"}} src ={item.img} alt =""/>
        </div>
        <motion.div className="text-container" style ={{y:y}}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
        <button>See Demo</button>
        </a>
        </motion.div>
        </div>
    </div> 
  </section>
  );
};

const Portfolio = ({ items }) => {

    const ref =useRef(null);

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end" ,"start start"]
    });
    const scaleX = useSpring (scrollYProgress, {
        stiffness:100,
        damping:30
    })

  return (
    <div className="portfolio" ref ={ref}>
        <div className ="progress">
          <h1>Projects</h1>
          <motion.div style ={{scaleX:scaleX}}className="progress-bar">

          </motion.div>
        </div>
      {items && items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
