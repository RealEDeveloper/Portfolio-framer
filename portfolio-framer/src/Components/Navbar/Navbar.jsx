import "./Navbar.scss"
import {motion} from 'framer-motion'
import Header from "../Header/Header"

import image4 from '../../assets/image4.png';

const Navbar = () => {

  const images = [
    image4,
   
  ];

  return (
    <div className ="navbar">
      
      <div className ="wrapper">
      <motion.span initial ={{opacity:0,scale:0.5}}  animate ={{opacity:1,scale:1}} transition ={{duration:0.5}}>
      <img src ={images[0]} alt ="logo" className ="img4"/></motion.span>
      <div className ="socials">
       <a href ="https://github.com/RealEDeveloper?tab=repositories"><img src ="./pic3.png" alt ="" className ="img3"/></a>
       <a href ="https://www.linkedin.com/in/tanishk-agrawal-66488a288/"><img src ="./pic1.png" alt =""  className ="img3"/></a>
      </div>
      </div>
    </div>
  )
}

export default Navbar
