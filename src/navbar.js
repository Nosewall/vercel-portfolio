import React from "react";
import {Link} from "react-scroll"

const Navbar = () => {

  return (  
    <nav className="navbar, fixed-top">
      <div className="links">
        <Link to="aboutMeDiv" spy={true} smooth={true} duration={600}> About Me</Link>
        <Link to="experienceDiv" spy={true} smooth={true} duration={600}> Experience</Link>
        <Link to="projectsDiv" spy={true} smooth={true} duration={600}> Projects</Link>
        <Link to="contactDiv" spy={true} smooth={true} duration={600}> Contact</Link>
      </div>
    </nav>
  );
}
 
export default Navbar; 