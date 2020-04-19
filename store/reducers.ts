import { combineReducers } from 'redux';

import appReducers from './app/reducers';
import genresReducers from './genres/reducers';

export default combineReducers({
  app: appReducers,
  genres: genresReducers,
});
