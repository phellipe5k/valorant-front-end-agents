import React from 'react';
import { motion } from 'framer-motion'
import '../Style/CharPage.css';
import Wallpaper from '../wallpaper.png'
import { Link } from 'react-router-dom';

class CharPage extends React.Component {
  constructor() {
    super();
    this.state = {
      char: "",
      loading: true,
      btn1: 'selected-button',
      btn2: '',
      btn3: '',
      btn4: '',
      ab1: 'selected',
      ab2: '',
      ab3: '',
      ab4: ''

    }
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleButton = ({ target }) => {
    this.setState({
      btn1: '',
      btn2: '',
      btn3: '',
      btn4: '',
      ab1: '',
      ab2: '',
      ab3: '',
      ab4: ''
    })
    switch (target.name) {
      case 'btn2':
        this.setState({btn2: 'selected-button', ab2: 'selected'})
        break;
      
      case 'btn3':
      this.setState({btn3: 'selected-button', ab3: 'selected'})
      break;

      case 'btn4':
        this.setState({btn4: 'selected-button', ab4: 'selected'})
        break;
      default:
        this.setState({btn1: 'selected-button', ab1: 'selected'})
        break;
    }
  }

  fetchApi = async () => {
    const { id } = this.props.match.params
    const pending = await fetch(`http://localhost:1337/characters/${id}`)
    const data = await pending.json()
    console.log(data)
    this.setState({char: data, loading: false})
  }
  render() {
    if(!localStorage.login) return (
      <div className="error-no-logged">
        <div className="wrap-login">
          <h1>Por favor, faça login para ter acesso ao detalhe do Personagem</h1>
          <div className="jogue-agora do-login"> <Link to="/login">FAZER LOGIN</Link></div>
        </div>
      </div>
    )
    if(this.state.loading) return <h1>Loading...</h1>
    const { name, characterImage, description, characterGameplayUrl, ability, country } = this.state.char ;
    const urlFormat = characterGameplayUrl.split('be/')[1];
    return (
      <section className="char-page">

      <img className="background-image char-page-wall" src={Wallpaper} />
        <motion.div className="char-page-infos" initial={{y: 100, opacity: 0}} animate={{y:0, opacity: 1, transition: {duration: .6}}}>
          <div className="wrap-infos">
            <p>{description}</p>
            <div className="video-infos">
                <iframe id="ytplayer" type="text/html" width="460" height="360"
              src={`http://www.youtube.com/embed/${urlFormat}?controls=0&autoplay=1 `}
              />
              <div className="agents-information">
                <div>
                <h2>Agents Information</h2>
                <h4>Name: <span>{name}</span></h4>
                <h4>Country: <span>{country}</span></h4>
                <h4>Signature Ability: <span>{ability.SignatureAbility}</span></h4>
                <h4>Abilities: <span>{`${ability.Ability1}, ${ability.Ability2}`}</span></h4>
                <h4>Ultimate: <span>{ability.Ultimate}</span></h4>
                </div>
                <div className="ability-selector">
                  <button onClick={this.handleButton} name="btn1" id={this.state.btn1} type="button" className=" button-ab"><div className="ability-button"></div></button>
                  <button onClick={this.handleButton} name="btn2" id={this.state.btn2} type="button" className=" button-ab "> <div className="ability-button"></div></button>
                  <button onClick={this.handleButton} name="btn3" id={this.state.btn3} type="button" className=" button-ab "> <div className="ability-button"></div></button>
                  <button onClick={this.handleButton} name="btn4" id={this.state.btn4} type="button" className=" button-ab "><div className="ability-button"></div></button>
                </div>
              </div>
            </div>
          </div>
          <motion.div className="char-page-abilities" animate={{
              transition: {
              staggerChildren: 0.4
            }}}>
            <div className="char-page-abilities-abs" id={this.state.ab1} >
              <div dangerouslySetInnerHTML={{__html: ability.Ability1Logo.path}}></div>
              <h3>{ability.Ability1}</h3>
            </div>
            <div className="char-page-abilities-abs" id={this.state.ab2}>
              <div dangerouslySetInnerHTML={{__html: ability.Ability2Logo.path}}></div>
              <h3>{ability.Ability2}</h3>
            </div>
            <div className="char-page-abilities-abs" id={this.state.ab3}>
              <div dangerouslySetInnerHTML={{__html: ability.signatureAbilityLogo.path}}></div>
              <h3>{ability.SignatureAbility}</h3>
            </div>
            <div className="char-page-abilities-abs" id={this.state.ab4}>
              <div dangerouslySetInnerHTML={{__html: ability.UltimateLogo.path}}></div>
              <h3>{ability.Ultimate}</h3>
            </div>
          </motion.div>
        </motion.div>
        <div className="char-page-image">
          <h1>{ name }</h1>
          <motion.img src={`http://localhost:1337${characterImage.url}`} initial={{x: 200, opacity: 0, scaleX: -1}} animate={{x: 0, opacity: 1, transition: {duration: .6}}} />
        </div>
       
      </section>  
    )           
  }
};
 
export default CharPage;