import { motion, useAnimation } from "framer-motion";
import { useInView} from "react-intersection-observer";
import { useEffect } from "react";

const AboutMe = () => {

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const  [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  const appearInViewTopDown = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -50 }
  };

  useEffect(() => {
    if (inView1) {
      console.log("In View 1")
      controls1.start("visible");
    }
    if (!inView1) {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      console.log("In View 2")
      controls2.start("visible");
    }
    if (!inView2) {
      controls2.start("hidden");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      console.log("In View 3")
      controls3.start("visible");
    }
    if (!inView3) {
      controls3.start("hidden");
    }
  }, [controls3, inView3]);

  return (  
    <div className="aboutMe">
      
      <motion.div
        animate={controls1}
        ref={ref1}
        initial="hidden"
        variants={appearInViewTopDown}
      >
        <h1 className="whoMe">Who, me?</h1>
      </motion.div>
      <motion.div
        animate={controls2}
        ref={ref2}
        initial="hidden"
        variants={appearInViewTopDown}
      >
        <div className="portrait">
        <img className="portraitImg" src="Images/portrait.png" alt="portrait of me" />
      </div></motion.div>
      <motion.div
        animate={controls3}
        ref={ref3}
        initial="hidden"
        variants={appearInViewTopDown}
      ><div className="aboutMeBlurb">
      <p>Hi there! I'm a computer science student and well rounded software guy based in Burnaby BC. I specialize in front-end web development, but I'm interested in tons of different technologies.</p>
      <p>I'm always looking for novel things to build and great people to work with. If you think I'd be a good fit for your team, feel free to shoot me a message via any of the links below. Looking forward to adding a personal flair to your projects.</p>
      </div></motion.div>
      
    </div>
  );
}
 
export default AboutMe;