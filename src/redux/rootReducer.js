import { combineReducers } from 'redux';
import scoreReducer from './scoreSlice';

const rootReducer = combineReducers({
  score: scoreReducer, // Menambahkan reducer score ke dalam rootReducer
});

export default rootReducer;
