import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Character from './Character';
import Logo from '../valorant-logo.png';
import { motion } from 'framer-motion';
import data_mocked from '../mock/';
 
class Characters extends React.Component {
  constructor() {
    super();
    this.state = {
      chars: [],
      loading: true,

    }
  }

  fetchApi = async () => {
    // const pending = await fetch(`https://valorant-project-back-end.herokuapp.com/characters`);
  
    console.log(this.state.chars);
  }
  componentDidMount(){
    // this.fetchApi();
    this.setState({chars: data_mocked, loading: false});
  }
  render() {
    return (
      <div>
       {
          (this.state.loading) 
          ? <h1>loading...</h1>
          : (
            <motion.div className='agents-div-width' animate={{transition: {
              staggerChildren: 0.8
            }}} >
              {this.state.chars.map(data =>  <Character data={data} />)}
            </motion.div>
          )
       }
      </div>
    )
  }
};
 
export default Characters;