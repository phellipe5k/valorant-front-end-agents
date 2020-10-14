import React from 'react';
import '../Style/Header.css';
import RiotLogo from '../riot-games.png';
import ValorantLogo from '../logo.svg';
import Polygon from '../polygon.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import userdata from '../api/userdata';
 
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userdata: ''
    }
  }


  handleLogout = () => {
    localStorage.removeItem('login')
    window.location.reload(false);
  }

  handleLogin = () => {
    if (localStorage.login !== undefined) {
      const { username, profileImageUrl } = JSON.parse(localStorage.login);
      return (
        <div className="log-in">
          <div className="profile-name">
            <img src={profileImageUrl}/>
            <h5>{username}</h5>
          </div>
          <div className="line-separate"></div>
          <button type="button" onClick={this.handleLogout}><h5><FontAwesomeIcon icon={faSignOutAlt} /> logout</h5></button>
        </div>
      )
    } 
    else {
      return (
        <div className="login">
        <Link to="/login" className="logg"><h3> <FontAwesomeIcon icon={faUser} /> Login</h3></Link>
        <div className="line-separate"></div>
        <Link to="/register" className="register"><h3>Register</h3></Link>
      </div>
      )
    }
  }
  render() {
    return (
      <motion.header className="header" initial="initial" animate="animate">
        <div className="logos">
          <Link to="/"><motion.img className="riot-games" src={RiotLogo} initial={{opacity: 0, x: -300}} animate={{opacity: 1, x: 0}} /></Link>
          <div className="line-separate"></div>
         <Link to="/"><motion.img className="valorant" src={ValorantLogo} initial={{opacity: 0, x: 300}} animate={{opacity: 1, x: 0}} /></Link>
        </div>
        <nav className="navegation">
          <a href="/" >GAME</a>
          <a href="/" >CHAMPIONS</a>
          <a href="/" className="selector">NEWS <img src={Polygon} width="8"/></a>
          <a href="/" >PATCH NOTES</a>
          <a href="/" className="selector">DISCOVER <img src={Polygon} width="8"/></a>
          <a href="/" >ESPORTS</a>
          <a href="/" >UNIVERSE</a>
          <a href="/" >SHOP</a>
          <a href="/" >SUPPORT</a>
        </nav>
        {this.handleLogin()}
        
      </motion.header>  
    )           
  }
};
 
export default Header;