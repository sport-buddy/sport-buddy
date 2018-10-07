import { CREATE_EVENT } from '../_actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case CREATE_EVENT: {
      return { ...state, created: action.payload };
    }
    default:
      return state;
  }
}
