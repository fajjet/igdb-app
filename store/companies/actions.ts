import ACTIONS, { CompaniesActionTypes } from './types';
import { Company } from 'types';

export const addCompanies = (companies: Array<Company>): CompaniesActionTypes => {
  return {
    type: ACTIONS.ADD_COMPANIES,
    payload: {
      companies,
    }
  }
};
