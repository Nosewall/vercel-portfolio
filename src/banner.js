import React from 'react';
import { motion } from "framer-motion";


export default class Banner extends React.Component {

  render() {
    return (
      <div className="banner">

        <div className="titleAndSub">
          <div className="name" id="name">
            <motion.div
              transition={{ duration: 1 }}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -250, opacity: 0 }}
            >
              <p><span className="firstName" id="firstName">Nolan</span></p>
            </motion.div>

            <motion.div
              transition={{ duration: 1, delay: .5 }}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -400, opacity: 0 }}
            >
              <span className="lastName" id="lastName">Nordwall</span>
            </motion.div>
          </div>
          <motion.div
            transition={{ duration: 1, delay: 1.5 }}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -250, opacity: 0 }}
          >
            <p className='sorcerer'>Software Sorcerer</p>
          </motion.div>
        </div>
      
        <div className="bannerText">
          <ul className="bannerBullets">
            <motion.div transition={{ duration: 1, delay: 2 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}><li>Effective</li></motion.div>
            <motion.div transition={{ duration: 1, delay: 2.5 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}><li>Energetic</li></motion.div>
            <motion.div transition={{ duration: 1, delay: 3 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}><li>Outstanding</li></motion.div>
          </ul>
        </div>
      </div>
      
    );
  }

}
