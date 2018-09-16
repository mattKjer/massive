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
    const ownedGames = Ownership.filter( ownershipRecord => ownershipRecord.userAccountId === userAccountId);
    const filteredGames = ownedGames.map(record => record.gameId);
    const games = Games.filter(game => filteredGames.includes(game.gameId));
    return games;
  }

  async login(user) {
    const userAccount = await Users.find( account => account.emailAddress === user.emailAddress && account.password === user.password);
    if (userAccount !== undefined) {
      this.props.setUserAccount(userAccount);
      const games = this.getUserGames(userAccount.userAccountId);
      this.props.setUserGames(games);
      this.setState({error: ''});
      this.props.authenticateLogin(true);
    }
    else {
      this.setState({error: "Login failed, user not found"});

    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      emailAddress : this.state.emailAddress,
      password : this.state.password
    };

    try {
      this.login(user);
    }
    catch(err) {
      this.setState({error: err})
    }
  };

  render() {
    const { loggedIn } = this.props;

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
            {loggedIn}
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
