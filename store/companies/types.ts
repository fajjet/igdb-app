import { Company } from "types";

enum Types {
  ADD_COMPANIES = 'ADD_COMPANIES'
}

interface addCompanies {
  type: typeof Types.ADD_COMPANIES,
  payload: {
    companies: Array<Company>,
  }
}

export type CompaniesActionTypes = addCompanies;

export default Types;
