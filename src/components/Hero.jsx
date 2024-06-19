import  {HERO_CONTENT} from "../constants"
import profilePic from  "../assets/Profile.png";
import { motion } from "framer-motion"


const Container = (delay) => ({
   hidden:{x:-100, opacity:0},
   visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5 , delay:delay},
   },

});

const Hero = () => {
  return (
    <div className = " mx-[20px] border-b border-neutral-900  pb-6 lg:mb-35">
       <div className = "flex flex-wrap">
             <div className ="w-full  lg:w-1/2">
                <div className ="flex flex-col items-center lg:items-start mx-10">
                   <motion.h1 
                    variants={Container(0)}
                    initial="hidden"
                    animate="visible"

                   className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
                   lg:text-8xl">Rahi Reyaz</motion.h1>

                   <motion.span
                     variants={Container(0.5)}
                     initial="hidden"
                     animate="visible"
                   className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                   bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>

                   <motion.p
                     variants={Container(1)}
                     initial="hidden"
                     animate="visible"
                   className ="text-justify my-2 max-w-xl py-6 font-light tracking-tighter"> {HERO_CONTENT}
                   </motion.p>

                 </div>
            </div> 
            <div className ="w-full lg:w-1/2 lg:p-8">
            <div className ="flex justify-center ">
                <motion.img 
                  initial={{x:100 ,opacity:0}}
                  animate={{x:0 ,opacity:1}}
                  transition={{duration:1, delay:1.2}}
                  className="rounded-[250px]"
                src={profilePic} 
                alt ="Rahi Reyaz"></motion.img>
            </div>
             </div>
        </div> 
     </div>
  )
}

export default Hero