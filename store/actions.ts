import * as appActions from './app/actions';
import * as genresActions from './genres/actions';
import * as gamesActions from './games/actions';

import appTypes from './app/types';
import genresTypes from './genres/types';
import gamesTypes from './games/types';

export default {
  ...appActions,
  ...genresActions,
  ...gamesActions,
};

export const TYPES = {
  ...appTypes,
  ...genresTypes,
  ...gamesTypes,
};
