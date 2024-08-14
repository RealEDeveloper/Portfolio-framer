import "./hero.scss"
import { motion } from "framer-motion"
import ImageSlider from "./ImageSlider"
const Hero = () => {

   const textVariant ={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:2,
            staggeredChildren:0.5,
        },
    },
    scrollButton:{
      opacity:0,
      y:10,
      transition:{
        duration:2,
        repeat:Infinity
      }
    },
  }
    const sliderVariants ={
      initial:{
        x:0,
      },
      animate:{
        x:"-220%",
        transition:{
          repeat:Infinity,
          repeatType:"mirror",
          duration:20,
        },
      },
    };
   


  return (
    <div className ="hero">
        <div className = "wrapper1">
        <motion.div className ="textContainer" variants ={textVariant} initial ="initial" animate ="animate">
       <motion.h2 variants ={textVariant}>TANISHK AGRAWAL</motion.h2>
       <motion.h1 variants ={textVariant}> Full Stack         Web Developer </motion.h1>
        <motion.div variants ={textVariant} className ="buttons">
         <motion.button variants ={textVariant}> My Work (↓)</motion.button>
         <motion.button variants ={textVariant}>Contact Me (↓)</motion.button>
         </motion.div>
         <motion.img variants ={textVariant} src ="./image13.png" alt ="" className ="img12" animate ="scrollButton"></motion.img>
         </motion.div>
        </div>
        <motion.div className ="slidingTextContainer" variants ={sliderVariants} initial ="initial" animate ="animate">
        Following My Passion
        </motion.div>
      <div  className ="imageContainer">
        <ImageSlider/>
      </div>
    </div>
  )
}

export default Hero
