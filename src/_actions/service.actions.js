import { fetchCategories } from '../services/services';

export const fetchCategoriesAction = () => {
  return function(dispatch) {
    return fetchCategories()
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
        return Promise.reject({});
      });
  };
};
