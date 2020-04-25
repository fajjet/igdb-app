import * as appActions from './app/actions';
import * as staticActions from './static/actions';
import * as gamesActions from './games/actions';
import * as companiesActions from './companies/actions';

import appTypes from './app/types';
import staticTypes from './static/types';
import gamesTypes from './games/types';
import companiesTypes from './companies/types';

export default {
  ...appActions,
  ...staticActions,
  ...gamesActions,
  ...companiesActions,
};

export const TYPES = {
  ...appTypes,
  ...staticTypes,
  ...gamesTypes,
  ...companiesTypes,
};
