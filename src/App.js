import './App.css';
import './banner.css';
import Navbar from './navbar';
import Contact from './contact';
import Experience from './experience';
import AboutMe from './aboutMe';
import Footer from './footer';
import Banner from './banner';
import Projects from './projects';

function App() {

  const title = 'Welcome to my portfolio';

  return (
    <div className="App">
      <div className="content">
        <div className="navbarDiv"><Navbar /></div>
        <div className="bannerDiv"><Banner/></div>
        <div className="aboutMeDiv"><AboutMe/></div>
        <div className="experienceDiv"><Experience /></div>
        <div className="projectsDiv"><Projects/></div>
        <div className="contactDiv"><Contact /></div>
        <div className="footerDiv"><Footer/></div>

      </div>
    </div>
  );
}

export default App;
