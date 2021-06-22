import {combineReducers} from 'redux';
import test from './test.reducer';
import content from './content.reducer';
import notes from './notes.reducer';
import userPreferences from './userPreferences.reducer';

export default combineReducers({
  test,
  content,
  notes,
  userPreferences,
});
