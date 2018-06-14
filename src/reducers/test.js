import { TEST } from '../constants';

const initialState = {
  temp: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return { ...state, temp: state.temp };
    default:
      return state;
  }
};