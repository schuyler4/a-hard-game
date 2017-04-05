import { combineReducers } from 'redux';
import playerReducer from './player-reducer';
import gameReducer from './game-reducer';
import enemysReducer from './enemys-reducer';

const reducers = combineReducers({
  playerReducer,
  gameReducer,
  enemysReducer
});

export default reducers;
