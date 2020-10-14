import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Character from './Character';
import Logo from '../valorant-logo.png';
import { motion } from 'framer-motion';

const GET_CURRENT_USER = gql`
{
  characters {
    id
    name
    country
    characterImage {
      url
    }
    ability {
      signatureAbilityLogo 
      UltimateLogo 
      Ability1Logo 
      Ability2Logo 
    }
  }
} 
`;
 
class Characters extends React.Component {

  render() {
    return (
      <Query query={GET_CURRENT_USER}>
        {({ data, loading }) => {
          if (loading || !data.characters) return <div className="loadingScreen"><img src={Logo}/>Loading...</div>
          const agents = data.characters;
          return (
            <motion.div animate={{transition: {
              staggerChildren: 0.8
            }}} style={{display: 'flex', flexWrap: 'wrap'}} className="characters-row">
              {agents.map(data =>  <Character data={data} />)}
            </motion.div>
          )
        }
        }
      </Query>
    )
  }
};
 
export default Characters;