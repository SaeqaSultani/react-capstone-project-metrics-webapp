import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COMPANIES = 'companies/companies/GET_COMPANIES';
const GET_COMPANIEY_DETAILS = 'companies/companies/GET_COMPANIEY_DETAILS';

const url = 'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=55b862a869deb41e6274437272a2c936';

const initialState = { companyList: [], companyDetails: {} };

// reducer
const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companyList: action.companies,
      };
    case GET_COMPANIEY_DETAILS:
      return {
        ...state,
        companyDetails: action.companies,
      };
    default:
      return state;
  }
};

// thunk
export const getCompanies = createAsyncThunk(
  GET_COMPANIES,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: GET_COMPANIES, companies: data });
  },
);

export const getCompanyDetails = createAsyncThunk(
  GET_COMPANIEY_DETAILS,
  async (args, { dispatch }) => {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${args}?apikey=55b862a869deb41e6274437272a2c936`);
    const data = await response.json();
    // console.log(`data: ${data}`);

    dispatch({ type: GET_COMPANIEY_DETAILS, companies: data[0] });
  },
);

export default companiesReducer;
