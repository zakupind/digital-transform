import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL_API = 'https://api.openai.com/v1/';

const OPENAI_API_KEY = process.env.REACT_APP_GPT_API_KEY;

const CONFIG_API = {
  baseUrl: URL_API,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
};

const api = createApi({
  reducerPath: 'chat_gpt',
  baseQuery: fetchBaseQuery(CONFIG_API),
  endpoints: (builder) => ({
    getData: builder.mutation({
      query: ({ content }) => ({
        method: 'POST',
        url: 'chat/completions',
        body: {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content }],
          temperature: 0.7,
        },
      }),
    }),
  }),
});

export default api;
