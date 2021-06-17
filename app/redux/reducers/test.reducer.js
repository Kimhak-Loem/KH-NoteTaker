import {TEST_ACTION} from '../actions/index.actions';

const test = (state = {}, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      return action.playload;
    }
    default:
      return state;
  }
};

export default test;
