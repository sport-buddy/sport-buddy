import { combineReducers } from 'redux';
import navReducer from './nav.reducer';
import loaderReducer from './loader.reducer';
import categoriesReducer from './categories.reducer';
import locationReducer from './locations.reducer';
import eventReducer from './event.reducer';
import filterLocationsReducer from './filterLocations.reducer';

const reducers = combineReducers({
  navReducer,
  loaderReducer,
  categoriesReducer,
  locationReducer,
  eventReducer,
  filterLocationsReducer
});

export default reducers;
