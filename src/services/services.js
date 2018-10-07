import axios from 'axios';

const config = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
};

export function fetchCategories() {
  return axios.get(
    'https://shrouded-inlet-61901.herokuapp.com/categories',
    config
  );
}

export function fetchLocations() {
  return axios.get(
    'https://shrouded-inlet-61901.herokuapp.com/locations',
    config
  );
}

export function createEvent(eventData) {
  console.log(eventData);

  return axios.post(
    'https://shrouded-inlet-61901.herokuapp.com/events',
    eventData,
    config
  );
}