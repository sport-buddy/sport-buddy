import { fetchCategories } from '../services/services';
import { FETCH_CATEGORIES } from './types';

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
