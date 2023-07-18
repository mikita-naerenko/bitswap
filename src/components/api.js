import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coincap.io/v2' }),
  tagTypes: ['Get'],
  endpoints: (builder) => ({
    getCryptoList: builder.query({
      query: (params) => { 
        const { offset,limit } = params;
        const defaultLimit = 10;
        const requestLimit = limit || defaultLimit;
        return `/assets?offset=${offset}&limit=${requestLimit}`;
    }
    }),
    getCryptoDetails: builder.query({
      query: (id) => `/assets/${id}`,
    }),
    getCryptoHistory: builder.query({
      query: (params) => {
        const { id, interval } = params;
        return `/assets/${id}/history?interval=${interval}`;
      },
    }),
    searchCoins: builder.query({
      query: (searchTerm) => `assets?search=${searchTerm}`,
    }),
  }),
});

export const { useGetCryptoListQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useSearchCoinsQuery } = api;




// Authorization: 'Bearer 98c6563a-3f10-4d05-91e0-fd1279fe6f4b',