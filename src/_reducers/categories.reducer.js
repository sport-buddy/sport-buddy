import { FETCH_CATEGORIES } from '../_actions/types';

const navState = {
  data: []
};

export default function(state = navState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
}
