'use strict';
import {
  SAVE_PLAYER1_ACTION,
  SAVE_PLAYER2_ACTION,
  SAVE_PLAYER1_SCORE_ACTION,
  SAVE_PLAYER2_SCORE_ACTION,
} from '../ReduxTypes';

export default function AppReducer(state, action) {
  switch (action.type) {
    case SAVE_PLAYER1_ACTION:
      return {...state, player1name: action.payload};
    case SAVE_PLAYER2_ACTION:
      return {...state, player2name: action.payload};
    case SAVE_PLAYER1_SCORE_ACTION:
      return {...state, player1score: action.payload};
    case SAVE_PLAYER2_SCORE_ACTION:
      return {...state, player2score: action.payload};
    default:
      return state ? state : {};
  }
}
