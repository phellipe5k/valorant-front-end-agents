import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Agents from './Pages/Agents';
import Header from './Components/Header';
import Register from './Components/Register';
import Login from './Components/Login';
import CharPage from './Components/CharPage';
import Footer from './Components/Footer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render () {
    return (
      <>
      <Header data={this.state.user} />
      <Switch >
        <Route exact path="/register" component={Register} />
        <Route exact path="/characters/:id" render={(props) => <CharPage {...props} />} />
        <Route exact path="/login" render={() => <Login userdata />} />
        <Route exact path="/characters" component={Agents} />
      </Switch>
      <Footer />
     </>
    )
  }
}

export default App;
