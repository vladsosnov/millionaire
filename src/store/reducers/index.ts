import { combineReducers } from 'redux';
import { gameReducer as game } from './game';

export const reducers = combineReducers({
  game,
});
