import { motion, useAnimation } from "framer-motion";
import { useInView} from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {
  const controls = useAnimation();
  const  [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log("In View 1")
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const appearInViewleft = {
    visible: { opacity: 1, x:0, transition: { duration: 1 } },
    hidden: { opacity: 0, x:-50 }
  };

  return ( 
    <motion.div
    animate={controls}
    ref={ref}
    initial="hidden"
    variants={appearInViewleft}
      className="contact">
      <h1 className="pingMe">Ping me</h1>
      <p className="contactInfo">I'd love to collaborate some time soon! You can reach me using any of the links below.</p>
      <div className="contactLinks">
      <a href="https://www.linkedin.com/in/nolan-nordwall/" className="contactLink" src="">
        <img src="Images/linkedin.png" alt="linkedIn" className="contactImg"/>
      </a>
      <a href="mailto::nolannordwall@gmail.com" className="contactLink">
        <img src="Images/email.png" alt="email" className="contactImg"/>
      </a>
      <a href="https://drive.google.com/file/d/1txy6-Ot7Tr1VypftxgarcQIjI8v5mBDh/view?usp=sharing" className="contactLink">
        <img src="Images/attach.png" alt="attachment" className="contactImg"/>
      </a>
      <a href="https://github.com/Nosewall" className="contactLink">
        <img src="Images/github.png" alt="github" className="contactImg"/>
      </a>
      </div> 
    </motion.div>
   );
}
 
export default Contact;