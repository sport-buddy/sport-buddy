import { fetchCategories, fetchLocations, createEvent } from '../services/services';
import { FETCH_CATEGORIES, FETCH_LOCATIONS, FILTER_LOCATION, CREATE_EVENT } from './types';

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

export const fetchLocationsActions = () => {
  return function(dispatch) {
    return fetchLocations()
      .then(response => {
        let locations = response.data;
        locations.forEach(function(obj) {
          obj['loaded'] = false;
        });

        dispatch({ type: FETCH_LOCATIONS, payload: response.data });
        return dispatch({
          type: FILTER_LOCATION,
          payload: { data: response.data, type: 'basketball' }
        });
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
        return Promise.reject({});
      });
  };
};

export const createEventAction = (createEventData) => {
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
