import { GET_TEMP, SET_TEMP } from '../constants/temp.constant';

export function getTemp() {
  return {
    type: GET_TEMP
  }
}

export function setTemp(data) {
  return {
    type: SET_TEMP,
    data: data
  }
}