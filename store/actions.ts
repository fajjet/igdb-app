import * as appActions from './app/actions';
import * as genresActions from './genres/actions';

import appTypes from './app/types';
import genresTypes from './genres/types';

export default {
  ...appActions,
  ...genresActions,
};

export const TYPES = {
  ...appTypes,
  ...genresTypes,
};
