const Banner = () => {
  return ( 
    <div className="banner">
      <div className="portrait">
        <img className = "portraitImg" src="Images/portrait.png" alt="portrait of me"/>
      </div>
      <div className="bannerText">
        <p className ="name">Nolan Nordwall</p>
        <ul className = "bannerBullets">
          <li>Fast</li>
          <li>Efficient</li>
          <li>Effective</li>
        </ul>
        <p className="sorcerer">Software Sorcerer</p>
      </div>
      
    </div>
   );
}
 
export default Banner;