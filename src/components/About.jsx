
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="px-4 md:px-10 border-b border-neutral-900">
      <h1 className="my-10 md:my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center">
        <motion.div
          className="w-full md:w-1/2 lg:p-10 flex justify-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img className="rounded-2xl h-auto md:h-96" src={aboutImg} alt="about" />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 lg:p-10 flex justify-center md:justify-start"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-justify my-2 max-w-xl py-6 md:py-0 md:pl-10 font-light tracking-tighter">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
