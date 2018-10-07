import { combineReducers } from 'redux';
import navReducer from './nav.reducer';
import categoriesReducer from './categories.reducer';
import locationReducer from './locations.reducer';
import eventReducer from './event.reducer';
import filterLocationsReducer from './filterLocations.reducer';

const reducers = combineReducers({
  navReducer,
  categoriesReducer,
  locationReducer,
  eventReducer,
  filterLocationsReducer
});

export default reducers;
