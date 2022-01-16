import './App.css';
import './banner.css';
import Navbar from './navbar';
import Contact from './contact';
import Experience from './experience';
import AboutMe from './aboutMe';
import Footer from './footer';
import Banner from './banner';

function App() {

  const title = 'Welcome to my portfolio';

  return (
    <div className="App">
      <div className="content">
      <Banner/>
      <Navbar/>
      <AboutMe/>
      <Experience />
      <Contact />
      <Footer/>
        <div className="bannerDiv"></div>
        <div className="aboutMeDiv"></div>
        <div className="experienceDiv"></div>
        <div className="contactDiv"></div>
      </div>
    </div>
  );
}

export default App;
