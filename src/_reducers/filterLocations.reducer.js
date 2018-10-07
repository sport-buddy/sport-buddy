import {
  FILTER_LOCATION_BASKETBALL,
  FILTER_LOCATION_FITNESS,
  FILTER_LOCATION_RUNNING,
  FILTER_LOCATION_TABLETENNIS
} from '../_actions/types';

const navState = {
  type: '',
  lt: '',
  data: []
};

export default function(state = navState, action) {
  switch (action.type) {
    case FILTER_LOCATION_BASKETBALL: {
      let data = action.payload.data.filter(d => d.type === 'basketball');
      return { ...state, data, type: 'basketball', lt: 'Krepšinis' };
    }
    case FILTER_LOCATION_FITNESS: {
      let data = action.payload.data.filter(d => d.type === 'fitness');
      return { ...state, data, type: 'fitness', lt: 'Fitnesas' };
    }
    case FILTER_LOCATION_RUNNING: {
      let data = action.payload.data.filter(d => d.type === 'running');
      return { ...state, data, type: 'running', lt: 'Bėgimas' };
    }
    case FILTER_LOCATION_TABLETENNIS: {
      let data = action.payload.data.filter(d => d.type === 'tabble_tennis');
      return { ...state, data, type: 'tabble_tennis', lt: 'Stalo tenisas' };
    }
    default:
      return state;
  }
}
