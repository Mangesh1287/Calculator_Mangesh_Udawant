import { ADD_ELEM, EQUAL, CLEAR } from '../constants';

export const addElem = (text) => {
  return {
    type: ADD_ELEM,
    text
  }
};

export const equalTo = (value) => {
  return {
    type: EQUAL,
    value
  }
};

export const clearCalc = () => {
  return {
    type: CLEAR,
    payload: {
      value: 0
    }
  }
};
