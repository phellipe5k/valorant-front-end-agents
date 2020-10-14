import React from 'react';
import { Redirect } from 'react-router-dom';
import api from '../api/api';
import wallpaperVideo from '../videos/video.mp4';
import '../Style/loginRegister.css';

class Register extends React.Component {
  constructor() {
    super(); 
    this.state = {
      email: '',
      username: '',
      password: '',
      redirect: false,
      imagePath: ''
    }
  }

  handleRegister = ({ target }) => {
    this.setState({[target.name]: target.value})
  }

  handleButton = () => {
    const { email, username, password, imagePath } = this.state
 
  fetch('http://localhost:1337/auth/local/register',{ 
  method: 'POST',  
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    "username": username,
    "email": email,
    "password": password,
    "profileImageUrl": imagePath
})})
  .then(res => { 
    return res.json()
  }).then(response => {
    if (response.errors) {
      alert('User already exist!')
      throw new Error('User already exist!')
    } else {
      this.setState({redirect: true})
    }
  })
  .catch(err => console.log(err))

  this.setState({email: '',
    username: '',
    imagePath: '',
    password: ''})
  }

  render() {
    const { email, username, password, redirect, imagePath } = this.state

    if (redirect) return <Redirect to="/login" />
    return (
      <section className="forms register-area">
        <div className="filter-background"></div>
        <video autoPlay muted loop>
          <source src={wallpaperVideo} type="video/mp4" />
        </video>
        <form>
          <h1>Cadastre-se</h1>
          <input type="text" onChange={this.handleRegister} value={email} placeholder="E-mail" name="email" />
          <input type="text" onChange={this.handleRegister} value={username} name="username" placeholder="Username" />
          <input type="text" onChange={this.handleRegister} value={imagePath} name="imagePath" placeholder="Caminho da imagem de perfil" />
          <input type="password" onChange={this.handleRegister} name="password" value={password} placeholder="Password" />
          <button onClick={this.handleButton} type="button">Cadastrar</button>
        </form>
        
      </section>  
    )           
  }
};
 
export default Register;