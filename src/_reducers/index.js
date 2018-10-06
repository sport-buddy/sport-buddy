import { combineReducers } from 'redux';
import navReducer from './nav.reducer';
import categoriesReducer from './categories.reducer';

const reducers = combineReducers({
  navReducer,
  categoriesReducer
});

export default reducers;
