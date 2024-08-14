import React from 'react'
import "./Services.scss"
import {motion} from "framer-motion"


const variants ={
    initial:{
    x:-500,
    y:100,
    opacity:0
    },
    animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
        duration:1,
        staggeredChildren:0.1,
    }
    }

}

const Services1 = () => {
  return (
    <motion.div className="services" variants ={variants} initial ="initial" animate="animate">
      <motion.div className="text-container">
    <p>I focus on creating projects that helps the community </p>
    <hr></hr>
      </motion.div>
      <motion.div className="title-container">
        <h1>Technologies and Skills</h1>
      </motion.div>
      <motion.div className="list-container">
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h3>Frontend</h3>
            <div className ="position">
            <p>React Ecommerece Application which has features of a dynamic shopping cart, product listings with detailed views, and a responsive design. It uses React Router for navigation and link route parameters.
            </p>
            <a href="https://github.com/RealEDeveloper/Project1" target="_blank" rel="noopener noreferrer">
            <button>Github</button>
            </a>
            </div>
        </motion.div>
        <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
            <h3>Backend</h3>
            <div className="position">
            <p> backend of eCommerce application manages product data, user authentication, and order processing. It handles cart management, including updating item quantities and calculating totals.
            </p>
            <a href="https://github.com/RealEDeveloper/Project1" target="_blank" rel="noopener noreferrer">
            <button>Github</button>
            </a>
            </div>
        </motion.div>
        <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
            <h3>Rapid API</h3>
            <div className="position">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Harum mollitia esse tempora ex nostrum facere eum.
             Sit accusamus repellat totam eum! Delectus nisi perferendis facere aliquid, eius animi inventore adipisci.
            </p>
            <a href="https://github.com/RealEDeveloper/Project4" target="_blank" rel="noopener noreferrer">
            <button>Github</button>
            </a>
            </div>
        </motion.div>
        <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
            <h3>FRAMER</h3>
            <div className="position">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Harum mollitia esse tempora ex nostrum facere eum.
             Sit accusamus repellat totam eum! Delectus nisi perferendis facere aliquid, eius animi inventore adipisci.
            </p>
            <a href="https://github.com/RealEDeveloper/Project1" target="_blank" rel="noopener noreferrer">
            <button>Github</button>
            </a>
            </div>
        </motion.div>
        <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
            <h3>ThreeJs</h3>
            <div className="position">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Harum mollitia esse tempora ex nostrum facere eum.
             Sit accusamus repellat totam eum! Delectus nisi perferendis facere aliquid, eius animi inventore adipisci.
            </p>
            <a href="https://github.com/RealEDeveloper/Project3" target="_blank" rel="noopener noreferrer">
            <button>Github</button>
            </a>
            </div>
        </motion.div>
        <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
            <h3>Functionalities</h3>
            <div className ="position">
            <p>Implemented  functionality such as Search ,Nested Comments, Api Integration .Make use of the ChartJs ,ThreeJs RapidApi etc.Implemented the backend  and admin panel with authorization functionality. 
            </p>
            <a href="https://github.com/RealEDeveloper/Project1" target="_blank" rel="noopener noreferrer">
            <button>Github</button>
            </a>
            </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services1;
