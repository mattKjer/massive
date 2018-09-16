import axios from 'axios';
import { GET_GAME, JOIN_GAME, CREATE_GAME, CREATE_POINT, UPDATE_POINT, ITEMS_LOADING } from '../actiontypes/GameTypes';

import socketIOClient from 'socket.io-client';

const socket = socketIOClient("http://localhost:5000");

/*
----------
Massive Entertainment
----------
The dispatch purely relats to the redux state management system.

The actions below simply set the application state to loading,
the api call is then made with axios, a promise based api.
Once the result is returned, is it then dispatched to the global state.

*/



export const getGame = teamName => dispatch => {
  dispatch(setItemsLoading());
  axios.get(`/api/games/${teamName}`).then(res =>
    dispatch({
      type: GET_GAME,
      payload: res.data
    })
  );
};

export const joinGame = teamName => dispatch => {
    dispatch(setItemsLoading());
    axios.get(`/api/games/${teamName}`).then(res =>
        dispatch({
            type: JOIN_GAME,
            payload: res.data
        })
    );
};

export const createGame = game => dispatch => {
  axios.post(`/api/games/`, game).then(res =>
    dispatch({
      type: CREATE_GAME,
      payload: res.data
    })
  );
};

export const createPoint = game => dispatch => {
  axios.post(`/api/games/${game.teamName}`, game).then(res =>
    dispatch({
      type: CREATE_POINT,
      payload: res.data
    })
  ).then(() => {
    socket.emit('pointsUpdated');
  });
};

export const updatePoint = game => dispatch => {
  axios.put(`/api/games/${game.teamName}`, game).then(res =>
    dispatch({
      type: UPDATE_POINT,
      payload: res.data
    })
  ).then(() => {
    socket.emit('pointsUpdated');
  });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
