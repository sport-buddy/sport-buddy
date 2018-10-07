import {
  fetchCategories,
  fetchLocations,
  createEvent,
  joinEvent
} from '../services/services';
import {
  FETCH_CATEGORIES,
  FETCH_LOCATIONS,
  FILTER_LOCATION_BASKETBALL,
  FILTER_LOCATION_FITNESS,
  FILTER_LOCATION_RUNNING,
  FILTER_LOCATION_TABLETENNIS,
  CREATE_EVENT,
  JOIN_EVENT,
  LOADING_STARTED,
  LOADING_ENDED
} from './types';

export const fetchCategoriesAction = () => {
  return function(dispatch) {
    return fetchCategories()
      .then(response => {
        return dispatch({ type: FETCH_CATEGORIES, payload: response.data });
      })
      .catch(error => {
        if (error) {
          console.error(error);
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
    dispatch({ type: LOADING_STARTED });

    return fetchLocations()
      .then(response => {
        let locations = response.data;
        locations.forEach(function(obj) {
          obj['loaded'] = false;
        });

        dispatch({ type: FETCH_LOCATIONS, payload: response.data });
        return dispatch(filterBasketballAction(response.data));
      })
      .catch(error => {
        if (error) {
          console.error(error);
        }
        return Promise.reject({});
      })
      .finally(() => {
        dispatch({ type: LOADING_ENDED });
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
          console.error(error);
        }
        return Promise.reject({});
      });
  };
};

export const joinEventAction = joinEventData => {
  return function(dispatch) {
    return joinEvent(joinEventData)
      .then(response => {
        console.log(response.data);
        return dispatch({ type: JOIN_EVENT, payload: response.data });
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
        return Promise.reject({});
      });
  };
};
