import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL_API = 'https://api.airtable.com/v0/';

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;

const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;

const AIRTABLE_TABLE_ID = process.env.REACT_APP_AIRTABLE_TABLE_ID;

const CONFIG_API = {
  baseUrl: URL_API,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  },
};

const api = createApi({
  reducerPath: 'air_table',
  baseQuery: fetchBaseQuery(CONFIG_API),
  endpoints: (builder) => ({
    getTables: builder.query({
      query: ({ budget, companyLevel, branch }) => ({
        method: 'GET',
        url: `${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}?filterByFormula=AND({fldlPB0oUpyaLQgCw} > ${budget}, {fldWGjvaGmtJIvjPd} = '${companyLevel}'${branch === 'all' ? '' : `, {fldVs68SKi8HKMfYq} = '${branch}'`})`,
      }),
    }),
  }),
});

export default api;
