import { Dispatch } from "redux";

import { InvolvedCompany, Company } from 'types';
import actions from 'store/actions';

export const fetchInvolvedCompaniesByIds = async (ids: Array<number>) : Promise<InvolvedCompany[]> => {
  const response = await fetch('/api/involved_companies', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: '*',
      where: `id = (${ids})`,
    }),
  });
  const result = await response.json();
  return result;
};

export const fetchCompaniesByIds = async (ids: Array<number>) : Promise<Company[]> => {
  const response = await fetch('/api/companies', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      fields: '*',
      where: `id = (${ids})`,
    }),
  });
  const result = await response.json();
  return result;
};

export const fetchAndDispatchCompaniesByIds = async (ids: Array<number>, dispatch: Dispatch) => {
  const companies = await fetchCompaniesByIds(ids);
  dispatch(actions.addCompanies(companies));
};
