import React from 'react';
import '../Style/Header.css';
import RiotLogo from '../riot-games.png';
import ValorantLogo from '../logo.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { RiArrowDropDownFill } from 'react-icons/ri'
import userdata from '../api/userdata';
 
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userdata: '',
      modal: 'dis-none',
    }
  }


  handleLogout = () => {
    localStorage.removeItem('login')
    window.location.reload(false);
  }

  handleModal = () => {
    if(this.state.modal === 'dis-none') this.setState({modal: ''})
    if(this.state.modal === '') this.setState({modal: 'dis-none'})
    
  }

  handleLogin = () => {
    if (localStorage.login !== undefined) {
      const { username, profileImageUrl } = JSON.parse(localStorage.login);
      return (
        <div className="log-in">
          <div className="profile-name">
            <img src={profileImageUrl}/>
            <h5>{username}</h5>
            <RiArrowDropDownFill style={{ color: "white", fontSize: '40px', cursor: 'pointer'}} onClick={this.handleModal} />
            <div className={`modal-logout ${this.state.modal}`}>
            <button type="button" onClick={this.handleLogout}><h5><FaSignOutAlt /></h5></button>
            </div>
              
            
          </div>
         
        </div>
      )
    } 
    else {
      return (
        <div className="login">
        <Link to="/login" className="logg"><h3> <FaUser /> Login</h3></Link>
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
          <a target="_blank" href="https://playvalorant.com/en-us/" >GAME</a>
          <Link to="/characters" >AGENTS</Link>
          <a target="_blank" href="https://playvalorant.com/en-us/news/" className="selector">NEWS</a>
          <a target="_blank" href="https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-1-10/" >PATCH NOTES</a>
          <a target="_blank" href="https://playvalorant.com/en-us/specs/" className="selector">SPECS </a>
          <a target="_blank" href="https://www.esports.com/en/valorant" >ESPORTS</a>
          <a target="_blank" href="https://playvalorant.com/en-us/news/announcements/valorant-community-code/" >UNIVERSE</a>
          <a target="_blank" href="https://merch.riotgames.com/en-us/" >SHOP</a>
          <a target="_blank" href="https://support-valorant.riotgames.com/hc/en-us/" >SUPPORT</a>
        </nav>
        {this.handleLogin()}
        
      </motion.header>  
    )           
  }
};
 
export default Header;