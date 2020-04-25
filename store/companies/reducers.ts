import ACTION, { CompaniesActionTypes } from './types';
import initialState, { State } from '../initialState';

export default function CompaniesReducer(
  state = initialState.companies,
  action: CompaniesActionTypes,
) :  State['companies'] {
  switch (action.type) {
    case ACTION.ADD_COMPANIES: {
      const { companies } = action.payload;
      const payload = companies.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state
  }
}
