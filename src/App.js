import './App.css';
import './banner.css';
import './navbar.css';
import './aboutMe.css';
import './contact.css';
import './experience.css';
import './footer.css';
import './projects.css';
import 'bootstrap';

import Navbar from './navbar';
import Contact from './contact';
import Experience from './experience';
import AboutMe from './aboutMe';
import Footer from './footer';
import Banner from './banner';
import Projects from './projects';

function App() {
  return (
    <div className="App">
      <div className="navbarDiv, fixed-top"><Navbar /></div>
      <div className="content">
        <div className="bannerDiv"><Banner /></div>
        <div className="aboutMeDiv"><AboutMe /></div>
        <div className="experienceDiv"><Experience /></div>
        <div className="projectsDiv"><Projects /></div>
        <div className="contactDiv"><Contact /></div>
        <div className="footerDiv"><Footer/></div>
      </div>
    </div>
  );
}

export default App;
