import { FETCH_WEATHER } from '../actions/index';

export default (state=[], action) =>  {
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.error) {
        const data = [action.payload.response.data, ...state];
        return data;
      }
      const data = [action.payload.data, ...state];
      console.log(data);
      return data;
  }
  return state;
};
