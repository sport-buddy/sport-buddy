import { combineReducers } from 'redux';
import navReducer from './nav.reducer';
import categoriesReducer from './categories.reducer';
import locationReducer from './locations.reducer';
import filterLocationsReducer from './filterLocations.reducer';

const reducers = combineReducers({
  navReducer,
  categoriesReducer,
  locationReducer,
  filterLocationsReducer
});

export default reducers;
