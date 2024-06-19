import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className =" -mx-10 border-b border-neutral-900 ">
                    
                     <h1 className="my-20 text-center text-4xl">About 
                            <span className="text-neutral-500"> Me</span>
                      </h1>

                  <div className ="flex flex-wrap ">
                     
                     <motion.div
                     whileInView={{opacity:1 ,x:0}}
                     initial={{opacity:0 ,x:-100}}
                     transition={{duration:0.5}}
                     className="w-full lg:w-1/2 lg:p-10 flex justify-center  ">
                       <img className="rounded-2xl h-2/3"src={aboutImg} alt="about"/> 
                     </motion.div>


                         <motion.div
                          whileInView={{opacity:1 ,x:0}}
                          initial={{opacity:0 ,x:100}}
                          transition={{duration:0.5}}
                         className ="w-full lg:w-1/2 lg:p-10 flex justify-center lg:justify-left">
                                     <p className="text-justify my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUT_TEXT}</p>
                         </motion.div>
                  </div>
    </div>
  )
}

export default About