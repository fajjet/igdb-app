import { combineReducers } from 'redux';

import appReducers from './app/reducers';
import staticReducers from './static/reducers';
import gamesReducers from './games/reducers';
import companiesReducers from './companies/reducers';

export default combineReducers({
  app: appReducers,
  static: staticReducers,
  games: gamesReducers,
  companies: companiesReducers,
});
