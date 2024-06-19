import {CONTACT} from "../constants"
import {motion} from "framer-motion";


function Contact() {
  return (
    <div className ="border-b border-neutral-900 pb-20 ">
      <motion.h1  whileInView={{opacity:1 ,y:0}}
                  initial ={{opacity:0 ,y:-100}}
                  transition ={{duration:0.5}}
                  className="my-10 text-center text-4xl ">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
      <a href="mailto:rahireyaz.iitb@gmail.com" className="bg-slate-800 border-2 border-sky-500
       text-green-500  rounded-lg  font-bold">Send Email</a>
           <motion.p 
            whileInView={{opacity:1 ,x:0}}
            initial ={{opacity:0 ,x:-100}}
            transition ={{duration:1}}
            className="my-4">{CONTACT.address}
            
            </motion.p>
      
      </div>
 </div>
  )
}

export default Contact