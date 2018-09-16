import React, { Component } from 'react';
import { Route } from 'react-router';
import Login from './components/login/Login';
import Account from './components/account/Account';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {},
      games: [],
    };
  }

  authenticateLogin(loggedIn) {
    this.setState({loggedIn});
  }

  setUserAccount(user) {
    this.setState({user});
  }

  setUserGames(games) {
    this.setState({games});
  }

  displayName = App.name //eslint-disable-line

  render() {
    return (
      <div className="wrapper">
        <Route exact path='/' 
          render={props =>
            this.state.loggedIn ? (
              <Account 
                {...props} 
                games={this.state.games} 
                user={this.state.user} 
                setUserAccount={this.setUserAccount.bind(this)} />
            ) : (
              <Login 
                {...props} 
                authenticateLogin={this.authenticateLogin.bind(this)}
                setUserAccount={this.setUserAccount.bind(this)} 
                setUserGames={this.setUserGames.bind(this)} 
              />
            )
          }
          />
      </div>
    );
  }
}