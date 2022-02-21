import { nameTest } from "./scripts";
import React from 'react';


export default class Banner extends React.Component {

  render() {
    return (
      <div className="banner">

        <div className="titleAndSub">
          <div className="name" id="name">
            <p><span className="firstName" id="firstName">Nolan</span></p>
            <p><span className="lastName" id="lastName">Nordwall</span> </p>
          </div>
          <p className="sorcerer">Software Sorcerer</p>
        </div>
      
        <div className="bannerText">
          <ul className="bannerBullets">
            <li>Effective</li>
            <li>Energetic</li>
            <li>Outstanding</li>
          </ul>
        </div>
      </div>
      
    );
  }
  componentDidMount() {
    nameTest();
  }

}
