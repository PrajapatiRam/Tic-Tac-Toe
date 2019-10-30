'use strict';
import {
  SAVE_PLAYER1_ACTION,
  SAVE_PLAYER2_ACTION,
  SAVE_PLAYER1_SCORE_ACTION,
  SAVE_PLAYER2_SCORE_ACTION,
} from '../ReduxTypes';

const savePlayer1Name = (payload = '') => {
  return {type: SAVE_PLAYER1_ACTION, payload};
};

const savePlayer2Name = (payload = '') => {
  return {type: SAVE_PLAYER2_ACTION, payload};
};

const savePlayer1Score = (payload = 0) => {
  return {type: SAVE_PLAYER1_SCORE_ACTION, payload};
};

const savePlayer2Score = (payload = 0) => {
  return {type: SAVE_PLAYER2_SCORE_ACTION, payload};
};

module.exports = {
  savePlayer1Name,
  savePlayer2Name,
  savePlayer1Score,
  savePlayer2Score,
};
