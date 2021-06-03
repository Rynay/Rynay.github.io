import * as TYPES from '../TYPES';

const dataReducer = (state = null, action) => {
  switch (action.type) {
    case TYPES.SET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;
