const Projects = () => {
  return (
    <div className="Projects">
      <p className="projectsTitle">Projects!</p>

      <div className="project">
        <p className="projectName">Cats in Space!</p>
        <p className="projectTagline">Tower Defense in sPaCE!</p>
        <img src="Images/CatsInSpace.jpg" alt="Cats in space logo" className="projectImg" />
        <p className="projectDesc">A completely unbalanced and entirely fun tower defence game build for Hack the North 2021</p>
        <a href="https://play.unity.com/mg/other/cats-in-space" className="projectLink">Give it a shot!</a>
      </div>

      <div className="project">
        <p className="projectName">Farm With Friends!</p>
        <p className="projectTagline">Microgreens for everybody!</p>
        <img src="Images/FarmWithFriends.jpg" alt="Farm with freinds logo" className="projectImg" />
        <p className="projectDesc">A website for a Westminster based Microgreens company. Made with Wordpress and Love!</p>
        <a href="https://farmwithfriends.co/" className="projectLink">Check it out!</a>
      </div>

      <div className="project">
        <p className="projectName">Tare Ticketing</p>
        <p className="projectTagline">Who needs paper, anyway?</p>
        <img src="Images/Tare.png" alt="Tare Ticketing Logo" className="projectImg" />
        <p className="projectDesc">A startup I worked with building paperless ticket solutions to the gravel trucking industry. Built with AWS, Node, and Mongo</p>
        <a href="https://github.com/Rshokar/Tare-Ticketing" className="projectLink">Go paperless!</a>
      </div>

      <div className="project">
        <p className="projectName">Good-Cop, Bad-Cop</p>
        <p className="projectTagline">The carrot AND The stick</p>
        <img src="Images/GoodCop.png" alt="Good cop bad cop logo" className="projectImg" />
        <p className="projectDesc">A motivation app made by myyself and my team during term 1 of school. We used Firebase for web hosting, and created a motivational app that was willing to be mean to you if you didn't achieve your goals</p>
        <a href="https://good-cop-bad-cop-a6d90.web.app/" className="projectLink">Get bullied!</a>
      </div>

      <div className="project">
        <p className="projectName">Soot Sleuth!</p>
        <p className="projectTagline">We'll hold you accountable</p>
        <img src="Images/SootSleuth.png" alt="Soot Sleuth Logo (And Easter Egg)" className="projectImg"></img>
        <p className="projectDesc">A web app made for school that tracks your carbon footprint and educates you on how to reduce it. Features a leaderboard, user page,
        and fancy graphs!</p>
        <a href="" className="projectLink"></a>
      </div>

    </div>
  );
}
 
export default Projects;