import { combineReducers } from 'redux';
import navReducer from './nav.reducer';
import categoriesReducer from './categories.reducer';
import locationReducer from './locations.reducer';

const reducers = combineReducers({
  navReducer,
  categoriesReducer,
  locationReducer
});

export default reducers;
