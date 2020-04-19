import { combineReducers } from 'redux';

import appReducers from './app/reducers';
import genresReducers from './genres/reducers';
import gamesReducers from './games/reducers';

export default combineReducers({
  app: appReducers,
  genres: genresReducers,
  games: gamesReducers,
});
