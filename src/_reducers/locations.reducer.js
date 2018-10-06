import { FETCH_LOCATIONS } from '../_actions/types';

const navState = {
  data: []
};

export default function(state = navState, action) {
  switch (action.type) {
    case FETCH_LOCATIONS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
}
