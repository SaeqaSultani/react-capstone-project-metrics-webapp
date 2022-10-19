import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COMPANIES = 'companies/companies/GET_COMPANIES';
const initialState = { companiesData: [] };
const url = 'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=accdcdc9170c4d78c178e8891320b6f5';
// thunk
export const getCompanies = createAsyncThunk(
  GET_COMPANIES,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    dispatch({ type: GET_COMPANIES, companies: data });

    return data;
  },
);

// reducer
const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.companies,
      };
    default:
      return state;
  }
};

export default companiesReducer;
