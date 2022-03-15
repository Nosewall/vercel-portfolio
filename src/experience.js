import { motion, useAnimation } from "framer-motion";
import { useInView} from "react-intersection-observer";
import { useEffect } from "react";

const Experience = () => {

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
    <div className="experience">
       <motion.div
        animate={controls1}
        ref={ref1}
        initial="hidden"
        variants={appearInViewTopDown}
      >
        <div className="titleBanner">        <h1 className="experienceTitle">Experience</h1></div>

        <p className="java"><i>My first language is java</i></p>
      </motion.div>
      
      
      <motion.div
        animate={controls2}
        ref={ref2}
        initial="hidden"
        variants={appearInViewTopDown}
      >
         <p className="experienceBlurb">I'm currently enrolled at BCIT for my Computer Systems Technology diploma, which I'll be finishing in Jan 2022. I've participated in a handful of Hackathons and a few independant projects. I have a passion for all things creative and expressive, and a history in leadership positions. Now in school , I've been elected as the Chair of the School of Computing for the BCIT Student Association. </p>

          <p className="currentSkillsTitle">Here are the technologies I'm most comfortable with</p>
      </motion.div>
     
      <motion.div
        animate={controls3}
        ref={ref3}
        initial="hidden"
        variants={appearInViewTopDown}
      >
        <div className="skillLists">
        <ul className="currentSkillsList1">
        <li>Java</li>
        <li>JavaScript</li>
        <li>C</li>
        <li>C#</li>
        <li>CSS</li>
          <li>HTML</li>
          <li>Node.js</li>
      </ul>
      <ul className="currentSkillsList2">
        <li>Python</li>
        <li>SQL</li>
        <li>Unity</li>
        <li>Wordpress</li>
        <li>MongoDB</li>
          <li>Firebase</li>
          <li>React</li>
        </ul>
      </div>

      <div className="futureSkillsDiv">
        <p>I'm working on learning about building intelligent agents in my AI specialization, and I'm excited to learn a ton more about the industry and all that I could create.</p>
      </div>
      </motion.div>
      
      </div>
   );
}
 
export default Experience;