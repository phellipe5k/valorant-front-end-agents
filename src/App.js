import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AgentsSection from './Components/AgentsSection';
import Header from './Components/Header';
import Register from './Components/Register';
import Login from './Components/Login';
import CharPage from './Components/CharPage'

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
        <Route exact path="/" component={AgentsSection} />
      </Switch>
     </>
    )
  }
}

export default App;
