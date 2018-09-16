import React from 'react';
import PropTypes from 'prop-types';
import Games from '../games/Games';
import User from '../user/User';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    };
  }

  render() {
    const { games, user, setUserAccount } = this.props;

    return (
      <React.Fragment>
        <User user={user} setUserAccount={setUserAccount} />
        <Games games={games} />
      </React.Fragment>
    );
  }
}

Account.propTypes = {
  games: PropTypes.array.isRequired, //eslint-disable-line
  user: PropTypes.object.isRequired, //eslint-disable-line
  setUserAccount: PropTypes.func.isRequired,
};

export default Account;
