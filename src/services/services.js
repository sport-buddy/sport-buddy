import axios from 'axios';

export function fetchCategories() {
  return axios.get('https://shrouded-inlet-61901.herokuapp.com/categories');
}
