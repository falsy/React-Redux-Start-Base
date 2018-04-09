import reducer from '../../src/reducers/temp.reducer';
import {GET_TEMP, SET_TEMP} from '../../src/constants/temp.constant';

describe('The counter reducer', () => {
  it('returns the default state object', () => {
    const result = reducer(undefined, {type: GET_TEMP})
    expect(result).toBeDefined()
  });
  
  test('returns zero count initially', () => {
    const result = reducer(undefined, {type: GET_TEMP})
    expect(result.temp).toBe(0);
  });
  
  test('it increases the counter', () => {
    const action = {type: SET_TEMP, data: 1};
    const result = reducer(undefined, action);
    expect(result.temp).toBe(1);
  });
});