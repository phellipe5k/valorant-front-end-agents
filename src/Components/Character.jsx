import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
 
class Character extends React.Component {
  render() {

    const fadeInUp = {
      rest: {
        x: 0,
      },
      hover: {
        x: -20,
        backgroundColor: "rgb(240, 229, 229)",
        borderColor: '#1F2326'
      }
    };

    const { country, name, ability, characterImage, id } = this.props.data
    return (
      <Link to={`/characters/${id}`}>
        <motion.div   className="agent-card" whileHover="hover" animate="rest">
          <div className="character" style={{backgroundImage: `url(http://localhost:1337${characterImage.url})`}}>
            <h5>{country}</h5>
            <h2>{name}</h2>
          </div>
          {
            (ability.Ability1Logo !== null)
            ? <motion.div className="abilities" variants={fadeInUp}>
              <div dangerouslySetInnerHTML={{__html: ability.Ability1Logo.path}}></div>
              <div dangerouslySetInnerHTML={{__html: ability.Ability2Logo.path}}></div>
              <div dangerouslySetInnerHTML={{__html: ability.signatureAbilityLogo.path}}></div>
              <div dangerouslySetInnerHTML={{__html: ability.UltimateLogo.path}}></div>
              
              
              
              
            
          </motion.div>
          : <h1>sem imagens</h1>
          }
          
        </motion.div>  
      </Link>
      
    )           
  }
};
 
export default Character;