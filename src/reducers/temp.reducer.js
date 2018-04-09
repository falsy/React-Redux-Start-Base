import { GET_TEMP, SET_TEMP } from '../constants/temp.constant';

const initialState = {
  temp: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TEMP:
      return { ...state, temp: state.temp };
    case SET_TEMP:
      return { ...state, temp: state.temp + Number(action.data) };
    default:
      return state;
  }
};