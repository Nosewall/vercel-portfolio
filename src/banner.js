import { nameTest } from "./scripts";
import React from 'react';


export default class Banner extends React.Component {

  render() {
    return (
      <div className="banner">

        <div className="titleAndSub">
          <p className="name" id="name">Nolan Nordwall</p>
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