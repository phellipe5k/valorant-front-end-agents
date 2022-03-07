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
    const pending = await fetch(`https://valorant-project-back-end.herokuapp.com/characters/${id}`)
    const data = await pending.json()
    console.log(data)
    this.setState({char: data, loading: false})
  }
  render() {
    /*if(!localStorage.login) return (
      <div className="error-no-logged">
        <div className="wrap-login">
          <h1>Por favor, faça login para ter acesso ao detalhe do Personagem</h1>
          <div className="jogue-agora do-login"> <Link to="/login">FAZER LOGIN</Link></div>
        </div>
      </div>
    )*/
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
                {/*<h4>Signature Ability: <span>{ability.SignatureAbility}</span></h4>
                <h4>Abilities: <span>{`${ability.Ability1}, ${ability.Ability2}`}</span></h4>
                <h4>Ultimate: <span>{ability.Ultimate}</span></h4>*/}
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
            <div /*dangerouslySetInnerHTML={{__html: ability.Ability1Logo.path}}*/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="ability-icon createSvgIcon__Svg-sc-1l8xi8d-0 ldKivg"><title>Jett - Cloudburst</title><path fill-rule="evenodd" clip-rule="evenodd" d="M37.9995 24.1153C37.9999 24.0771 38 24.0387 38 24.0001C38 17.0096 32.8837 11.215 26.1938 10.1615C25.2303 10.0097 24 9.22049 24 8.24442L24 6.49725C24 6.34688 23.8443 6.24795 23.7103 6.31631C18.3018 9.07714 10.0645 14.6336 10.0004 23.8912C10.0001 23.9273 10 23.9635 10 23.9999C10 30.9904 15.1163 36.785 21.8062 37.8385C22.7697 37.9903 24 38.7776 24 39.7537V41.5029C24 41.6533 24.1557 41.7522 24.2897 41.6838C29.697 38.9236 37.9316 33.369 37.9995 24.1153ZM31.9418 24C31.9418 28.3892 28.3862 31.9473 24 31.9473C22.4248 31.9473 20.9568 31.4884 19.722 30.6969C22.4719 30.4395 24.6109 28.4331 24.6109 25.2231C24.6109 23.4478 23.6315 22.1154 21.9567 21.4395C22.6398 22.0794 23.0667 22.9899 23.0667 24.0001C23.0667 25.9367 21.4978 27.5067 19.5624 27.5067C17.629 27.5067 16.0613 25.9398 16.0582 24.0057C16.0582 24.0038 16.0582 24.0019 16.0582 24C16.0582 19.6109 19.6139 16.0527 24 16.0527C28.3862 16.0527 31.9418 19.6109 31.9418 24Z"/></svg>
              </div>
              <h3>Q</h3>
            </div>
            <div className="char-page-abilities-abs" id={this.state.ab2}>
            <div /*dangerouslySetInnerHTML={{__html: ability.Ability1Logo.path}}*/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="ability-icon createSvgIcon__Svg-sc-1l8xi8d-0 ldKivg"><title>Jett - Cloudburst</title><path fill-rule="evenodd" clip-rule="evenodd" d="M37.9995 24.1153C37.9999 24.0771 38 24.0387 38 24.0001C38 17.0096 32.8837 11.215 26.1938 10.1615C25.2303 10.0097 24 9.22049 24 8.24442L24 6.49725C24 6.34688 23.8443 6.24795 23.7103 6.31631C18.3018 9.07714 10.0645 14.6336 10.0004 23.8912C10.0001 23.9273 10 23.9635 10 23.9999C10 30.9904 15.1163 36.785 21.8062 37.8385C22.7697 37.9903 24 38.7776 24 39.7537V41.5029C24 41.6533 24.1557 41.7522 24.2897 41.6838C29.697 38.9236 37.9316 33.369 37.9995 24.1153ZM31.9418 24C31.9418 28.3892 28.3862 31.9473 24 31.9473C22.4248 31.9473 20.9568 31.4884 19.722 30.6969C22.4719 30.4395 24.6109 28.4331 24.6109 25.2231C24.6109 23.4478 23.6315 22.1154 21.9567 21.4395C22.6398 22.0794 23.0667 22.9899 23.0667 24.0001C23.0667 25.9367 21.4978 27.5067 19.5624 27.5067C17.629 27.5067 16.0613 25.9398 16.0582 24.0057C16.0582 24.0038 16.0582 24.0019 16.0582 24C16.0582 19.6109 19.6139 16.0527 24 16.0527C28.3862 16.0527 31.9418 19.6109 31.9418 24Z"/></svg>
              </div>
              <h3>Q</h3>
            </div>
            <div className="char-page-abilities-abs" id={this.state.ab3}>
            <div /*dangerouslySetInnerHTML={{__html: ability.Ability1Logo.path}}*/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="ability-icon createSvgIcon__Svg-sc-1l8xi8d-0 ldKivg"><title>Jett - Cloudburst</title><path fill-rule="evenodd" clip-rule="evenodd" d="M37.9995 24.1153C37.9999 24.0771 38 24.0387 38 24.0001C38 17.0096 32.8837 11.215 26.1938 10.1615C25.2303 10.0097 24 9.22049 24 8.24442L24 6.49725C24 6.34688 23.8443 6.24795 23.7103 6.31631C18.3018 9.07714 10.0645 14.6336 10.0004 23.8912C10.0001 23.9273 10 23.9635 10 23.9999C10 30.9904 15.1163 36.785 21.8062 37.8385C22.7697 37.9903 24 38.7776 24 39.7537V41.5029C24 41.6533 24.1557 41.7522 24.2897 41.6838C29.697 38.9236 37.9316 33.369 37.9995 24.1153ZM31.9418 24C31.9418 28.3892 28.3862 31.9473 24 31.9473C22.4248 31.9473 20.9568 31.4884 19.722 30.6969C22.4719 30.4395 24.6109 28.4331 24.6109 25.2231C24.6109 23.4478 23.6315 22.1154 21.9567 21.4395C22.6398 22.0794 23.0667 22.9899 23.0667 24.0001C23.0667 25.9367 21.4978 27.5067 19.5624 27.5067C17.629 27.5067 16.0613 25.9398 16.0582 24.0057C16.0582 24.0038 16.0582 24.0019 16.0582 24C16.0582 19.6109 19.6139 16.0527 24 16.0527C28.3862 16.0527 31.9418 19.6109 31.9418 24Z"/></svg>
              </div>
              <h3>Q</h3>
            </div>
            <div className="char-page-abilities-abs" id={this.state.ab4}>
            <div /*dangerouslySetInnerHTML={{__html: ability.Ability1Logo.path}}*/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="ability-icon createSvgIcon__Svg-sc-1l8xi8d-0 ldKivg"><title>Jett - Cloudburst</title><path fill-rule="evenodd" clip-rule="evenodd" d="M37.9995 24.1153C37.9999 24.0771 38 24.0387 38 24.0001C38 17.0096 32.8837 11.215 26.1938 10.1615C25.2303 10.0097 24 9.22049 24 8.24442L24 6.49725C24 6.34688 23.8443 6.24795 23.7103 6.31631C18.3018 9.07714 10.0645 14.6336 10.0004 23.8912C10.0001 23.9273 10 23.9635 10 23.9999C10 30.9904 15.1163 36.785 21.8062 37.8385C22.7697 37.9903 24 38.7776 24 39.7537V41.5029C24 41.6533 24.1557 41.7522 24.2897 41.6838C29.697 38.9236 37.9316 33.369 37.9995 24.1153ZM31.9418 24C31.9418 28.3892 28.3862 31.9473 24 31.9473C22.4248 31.9473 20.9568 31.4884 19.722 30.6969C22.4719 30.4395 24.6109 28.4331 24.6109 25.2231C24.6109 23.4478 23.6315 22.1154 21.9567 21.4395C22.6398 22.0794 23.0667 22.9899 23.0667 24.0001C23.0667 25.9367 21.4978 27.5067 19.5624 27.5067C17.629 27.5067 16.0613 25.9398 16.0582 24.0057C16.0582 24.0038 16.0582 24.0019 16.0582 24C16.0582 19.6109 19.6139 16.0527 24 16.0527C28.3862 16.0527 31.9418 19.6109 31.9418 24Z"/></svg>
              </div>
              <h3>Q</h3>
            </div>
          </motion.div>
        </motion.div>
        <div className="char-page-image">
          <h1>{ name }</h1>
          <motion.img src={`https://valorant-project-back-end.herokuapp.com${characterImage.url}`} initial={{x: 200, opacity: 0, scaleX: -1}} animate={{x: 0, opacity: 1, transition: {duration: .6}}} />
        </div>
       
      </section>  
    )           
  }
};
 
export default CharPage;