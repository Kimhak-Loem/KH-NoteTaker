import {ADD_NOTE} from '../actions/index.actions';

const notes = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return [...state, action.playload];
    }
    default:
      return state;
  }
};

export default notes;
