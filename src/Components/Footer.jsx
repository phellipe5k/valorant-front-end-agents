import React from 'react';
import { Link } from 'react-router-dom';
import { BsCodeSlash } from 'react-icons/bs';
import { FaBrain } from 'react-icons/fa';
import '../Style/Footer.css';
import RiotLogo from '../riot-games.png';
import ValorantLogo from '../logo.svg';
 
class Footer extends React.Component {
 
  render() {
    return (
      <footer>
        <div className="authors">
          <h3><FaBrain/> UI/UX Designer<br/><br/> <a href="https://dribbble.com/UnEpicKid" target="_blank" > Dmitry Kiiashko</a></h3>
          <div className="footer-icons">
            <img src={RiotLogo} />
            <img src={ValorantLogo} />
          </div>
          
          <h3><BsCodeSlash/> Developed by <br/><br/> <a href="https://github.com/phellipe5k" target="_blank">Luiz Phellipe C.</a></h3>
        </div>
        
      </footer>
    )           
  }
};
 
export default Footer;