const Experience = () => {
  return ( 
    <div className="experience">
      <h2 className="experienceTitle">Experience</h2>
      <p className="java"><i>My first language is java</i></p>

      <p className="experienceBlurb">I'm currently enrolled at BCIT for my Computer Systems Technology diploma. I'll be graduating Dec of 2022. I've also participated in a few hackathons and independant projects, and I was voted in as the Chair of the School of Computing and Academic studies for the BCIT Student Association. </p>

      <p className="currentSkillsTitle">Current technology proficiencies</p>

      <div className="skillLists">
        <ul className="currentSkillsList1">
        <li>Java</li>
        <li>JavaScript</li>
        <li>C</li>
        <li>C#</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
      <ul className="currentSkillsList2">
        <li>Python</li>
        <li>SQL</li>
        <li>Unity</li>
        <li>Wordpress</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        </ul>
      </div>

      <p className="futureSkillsTitle">Skills that I'm working on developing</p>
      <ul className="futureSkills">
        <li>Machine Learning</li>
        <li>Blender</li>
      </ul>
      </div>
   );
}
 
export default Experience;