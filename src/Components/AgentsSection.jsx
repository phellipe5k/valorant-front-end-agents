import React from 'react';
import Characters from './Characters';
 import Wallpaper from '../wallpaper.png'
import '../Style/AgentsSection.css';

class AgentsSection extends React.Component {
  render() {
    return (
      <section className="agents-section">
      <img className="background-image" src={Wallpaper} />
      <div className="agents-section-text-wrap">
        <h1>AGENTS</h1>
      </div>
      <Characters  />
      </section>  
    )           
  }
};
 
export default AgentsSection;