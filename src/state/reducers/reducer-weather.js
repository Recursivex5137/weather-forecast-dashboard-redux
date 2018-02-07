import { FETCH_WEATHER } from '../actions/index';

export default (state=[], action) =>  {
  switch (action.type) {
    case FETCH_WEATHER:
      const data = [action.payload.data, ...state];
      return data;
  }
  return state;
};
