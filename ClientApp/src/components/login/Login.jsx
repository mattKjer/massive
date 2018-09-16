import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Users from '../../data/users.json';
import Ownership from '../../data/ownership.json';
import Games from '../../data/games.json';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailAddress: '',
      password: '',
      error: '',
    };
  }

  getUserGames(userAccountId) {
    // Gets a list of gameIds associated with the users account
    const userGameIds = Ownership
                        .filter( ownershipRecord => ownershipRecord.userAccountId === userAccountId)
                        .map(record => record.gameId);

    // Filters through the Games datastore to match a gameID with a game
    const ownedGames = Games
                        .filter(game => userGameIds.includes(game.gameId));
    return ownedGames;
  }

  async login(user) {
    try {
      const userAccount = await Users
                                  .find( account => account.emailAddress === user.emailAddress && account.password === user.password);
      if (userAccount === undefined) {
        throw Error("Login Failed, user not found");
      };

      this.props.setUserAccount(userAccount);

      const games = this.getUserGames(userAccount.userAccountId);
      this.props.setUserGames(games);

      // reset error message
      this.setState({error: ''});
      this.props.authenticateLogin(true);
    }
    catch(error) {
      this.setState({error: error.message});
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const user = {
      emailAddress : this.state.emailAddress,
      password : this.state.password
    };

    this.login(user);
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.onSubmit}>
          <div className="login">
            <div>
              <p>E-mail</p>
              <input 
                  type="text"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="Email Address"
                  onChange={this.onChange}
                  className="form-control"/>
            </div>
            <div>
            <p>Password</p>
            <input 
                type="password"
                name="password"
                id="password"
                onChange={this.onChange}
                className="form-control"/>
            </div>
            <button type="submit" className="button">
              Log in
            </button>
            {this.state.error && <p className="error-message">{this.state.error}</p>}
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  authenticateLogin: PropTypes.func.isRequired,
  setUserGames: PropTypes.func.isRequired,
  setUserAccount: PropTypes.func.isRequired,
};

export default Login;
