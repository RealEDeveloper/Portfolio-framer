import "./Sidebar.scss"
import {motion} from 'framer-motion'
import Link from "./links/links"
import { useState } from "react"
import ToggleButton from "./ToggleButton/toggle"



const Sidebar = () => {
const[open,setOpen] = useState(false);

const variants ={
    open:{ 
        clipPath:'circle(120% at 50% 50%)',
        transition:{
            type:"spring",
            stiffness:20,
        }
    },
    closed: {
        clipPath: "circle (3% at 50% 50%)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
    },
},
};

  return (
    <motion.div className ="sidebar" animate ={open ? "open" : "closed"}>
     <motion.div className ="bg" variants ={variants}>
        <Link/>
     </motion.div>
     <ToggleButton setOpen ={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
