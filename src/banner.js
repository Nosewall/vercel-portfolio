const Banner = () => {
  return ( 
    <div className="banner">
      <div className="bannerText">
        <p class="name">Nolan Nordwall</p>
        <ul class = "bannerBullets">
          <li>Fast</li>
          <li>Efficient</li>
          <li>Effective</li>
        </ul>
        <p className="sorcerer">Software Sorcerer</p>
      </div>
      <div className="portrait">
        <img class = "portraitImg" src="Images/portrait.png" alt="portrait of me"/>
      </div>
    </div>
   );
}
 
export default Banner;