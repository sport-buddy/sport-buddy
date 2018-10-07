import {
  fetchCategories,
  fetchLocations,
  createEvent
} from '../services/services';
import {
  FETCH_CATEGORIES,
  FETCH_LOCATIONS,
  FILTER_LOCATION_BASKETBALL,
  FILTER_LOCATION_FITNESS,
  FILTER_LOCATION_RUNNING,
  FILTER_LOCATION_TABLETENNIS,
  CREATE_EVENT
} from './types';

export const fetchCategoriesAction = () => {
  return function(dispatch) {
    return fetchCategories()
      .then(response => {
        return dispatch({ type: FETCH_CATEGORIES, payload: response.data });
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
        return Promise.reject({});
      });
  };
};

export const filterBasketballAction = data => {
  return {
    type: FILTER_LOCATION_BASKETBALL,
    payload: { data, type: 'basketball' }
  };
};

export const filterFitnessAction = data => {
  return {
    type: FILTER_LOCATION_FITNESS,
    payload: { data, type: 'fitness' }
  };
};

export const filterRunningAction = data => {
  return {
    type: FILTER_LOCATION_RUNNING,
    payload: { data, type: 'running' }
  };
};

export const filterTabbleTennisAction = data => {
  return {
    type: FILTER_LOCATION_TABLETENNIS,
    payload: { data, type: 'tabble_tennis' }
  };
};

export const fetchLocationsActions = () => {
  return function(dispatch) {
    return fetchLocations()
      .then(response => {
        dispatch({ type: FETCH_LOCATIONS, payload: response.data });
        return dispatch(filterBasketballAction(response.data));
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
        return Promise.reject({});
      });
  };
};

export const createEventAction = createEventData => {
  return function(dispatch) {
    return createEvent(createEventData)
      .then(response => {
        return dispatch({ type: CREATE_EVENT, payload: response.data });
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
        return Promise.reject({});
      });
  };
};
