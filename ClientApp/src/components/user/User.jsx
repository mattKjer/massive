import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UpdateDetailsModal from '../modals/updateDetailsModal/UpdateDetailsModal';
import UpdatePasswordModal from '../modals/updatePasswordModal/UpdatePasswordModal';
import './User.css';

class User extends Component {
  isLoggedIn() {
    const { user, games } = this.state;
    return { user, games };
  }

  render() {
    const { user, setUserAccount } = this.props;
    return (
      <div className="user-container">
        <div className="user">
          <div className="description">
            <h2>Account details</h2>
          </div>
          <div className="user-details">
            First name: {user.firstName} <br />
            Last name: {user.lastName} <br />
            Email address: {user.emailAddress}
          </div>
          <div className="update-details">
            <UpdateDetailsModal user={user} setUserAccount={setUserAccount} />
            <UpdatePasswordModal />
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired, //eslint-disable-line
  setUserAccount: PropTypes.func.isRequired,
};

export default User;
