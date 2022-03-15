import { motion, useAnimation } from "framer-motion";
import { useInView} from "react-intersection-observer";
import { useEffect } from "react";

const Projects = () => {

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();

  const appearInViewTopDown = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -50 }
  };

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
    if (!inView1) {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
    if (!inView2) {
      controls2.start("hidden");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
    if (!inView3) {
      controls3.start("hidden");
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    }
    if (!inView4) {
      controls4.start("hidden");
    }
  }, [controls4, inView4]);

  useEffect(() => {
    if (inView5) {
      controls5.start("visible");
    }
    if (!inView5) {
      controls5.start("hidden");
    }
  }, [controls5, inView5]);


  return (
    <div className="Projects">
      <h1 className="projectsTitle">Projects!</h1>


      <motion.div
        animate={controls1}
        ref={ref1}
        initial="hidden"
        variants={appearInViewTopDown}
        className="project catDiv">
        <div className="projectContent">
          <div className="projectNameAndDesc">
            <p className="projectName">Cats in Space!</p>
            <p className="projectTagline">Tower Defense in sPaCE!</p>
          </div>
        <img src="Images/CatsInSpace.jpg" alt="Cats in space logo" className="projectImg" />
        <p className="projectDesc">A completely unbalanced and entirely fun tower defence game build for Hack the North 2021</p>
        <a href="https://play.unity.com/mg/other/cats-in-space" className="projectLink">Give it a shot!</a></div>
      </motion.div>

      
      
      
      <motion.div
        animate={controls2}
        ref={ref2}
        initial="hidden"
        variants={appearInViewTopDown}
        className="project farmDiv">
          <div className="projectContent">
            <div className="projectNameAndDesc">
              <p className="projectName">Farm With Friends!</p>
              <p className="projectTagline">Microgreens for everybody!</p>
            </div>
            <img src="Images/FarmWithFriends.jpg" alt="Farm with freinds logo" className="projectImg" />
            <p className="projectDesc">A website for a Westminster based Microgreens company. Made with Wordpress and Love!</p>
            <a href="https://farmwithfriends.co/"
              className="projectLink">Check it out!</a>
          </div>
         </motion.div>
      
      
      
         <motion.div
        animate={controls3}
        ref={ref3}
        initial="hidden"
        variants={appearInViewTopDown} className="project tareDiv">
          <div className="projectContent">
            <div className="projectNameAndDesc">
              <p className="projectName">Tare Ticketing</p>
              <p className="projectTagline">Who needs paper, anyway?</p>
            </div>
            <img src="Images/Tare.png" alt="Tare Ticketing Logo" className="projectImg" />
            <p className="projectDesc">A startup I worked with building paperless ticket solutions to the gravel trucking industry. Built with AWS, Node, and Mongo</p>
            <a href="https://github.com/Rshokar/Tare-Ticketing" className="projectLink">Go paperless!</a>
          </div>
        </motion.div>
        
      
      
        <motion.div
        animate={controls4}
        ref={ref4}
        initial="hidden"
        variants={appearInViewTopDown} className="project sootDiv">
            <div className="projectContent">
            <div className="projectNameAndDesc"><p className="projectName">Soot Sleuth!</p>
                <p className="projectTagline">We'll hold you accountable</p>
                </div>
        <img src="Images/SootSleuth.png" alt="Soot Sleuth Logo (And Easter Egg)" className="projectImg"></img>
        <p className="projectDesc">A web app made for school that tracks your carbon footprint and educates you on how to reduce it. Features a leaderboard, user page,
        and fancy graphs!</p>
        <a href="https://github.com/Nosewall/COMP-2800-Team-BBY-02" className="projectLink">Check your footprint now!</a></div>
        
      </motion.div>
      
      
      <motion.div
        animate={controls5}
        ref={ref5}
        initial="hidden"
        variants={appearInViewTopDown} className="project copDiv">
              <div className="projectContent">
              <div className="projectNameAndDesc">
        <p className="projectName">Good-Cop, Bad-Cop</p>
                  <p className="projectTagline">The carrot AND The stick</p>
                  </div>
        <img src="Images/GoodCop.png" alt="Good cop bad cop logo" className="projectImg" />
        <p className="projectDesc">A motivation app made by myyself and my team during term 1 of school. We used Firebase for web hosting, and created a motivational app that was willing to be mean to you if you didn't achieve your goals</p>
        <a href="https://good-cop-bad-cop-a6d90.web.app/" className="projectLink">Get bullied!</a>
      </div>
        
      </motion.div>
      



    </div>
  );
}
 
export default Projects;