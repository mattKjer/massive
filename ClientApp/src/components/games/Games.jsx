import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Games.css';

class Games extends Component {
  isLoggedIn() {
    const { user, games } = this.state;
    return { user, games };
  }

  render() {
    const { games } = this.props;
    return (
      <div className="account-container">
        <div className="albums">
          {games.map(game => (
            <div className="album" key={`${game.gameId}`}>
              <img className="album__artwork" src={`${game.thumbnail}`} alt="album artwork" />
              <div className="album__details">
                <h2>{game.name}</h2>
                <p className="album__artist">Ubisoft</p>
                <p className="album__desc">
                Age Restriction:
                  {game.ageRestriction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Games.propTypes = {
  games: PropTypes.array.isRequired, //eslint-disable-line
};

export default Games;
