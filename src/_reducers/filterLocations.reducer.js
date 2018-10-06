import { FETCH_CATEGORIES, FILTER_LOCATION } from '../_actions/types';

const navState = {
  data: []
};

export default function(state = navState, action) {
  switch (action.type) {
    case FILTER_LOCATION: {
      let data = action.payload.data.filter(d => d.type === 'basketball');
      return { ...state, data };
    }
    default:
      return state;
  }
}
