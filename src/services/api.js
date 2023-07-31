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
    getMarkets: builder.query({
        query: (id) => `/assets/${id}/markets`
    }),
    getExchangesDetails: builder.query({
      query: (id) => `/exchanges/`
  }),
    searchCoins: builder.query({
      query: (searchTerm) => `assets?search=${searchTerm}`,
    }),
    getHistoryCoinsOfWallet: builder.query({
      async queryFn(params) {
        const {arrId, interval} = params;
        const querys = arrId.map((id) => `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`);
        
        try {
          const responses = await Promise.all(querys.map((query) => {
            return fetch(query);
          }));
          const data = await Promise.all(responses.map((response) => response.json()));
          return { data };
        } catch (error) {
          return { error };
        }
      }
    }),
    getFavoriteCoins: builder.query({
      // Multiple request for favorite coins page
      async queryFn(args) {
        const querys = args.map((id) => `https://api.coincap.io/v2/assets/${id}`);
    
        try {
          const responses = await Promise.all(querys.map((query) => {
            return fetch(query);
          }));
          const data = await Promise.all(responses.map((response) => response.json()));
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
    // WebSocket endpoint
    // subscribeData: builder.subscription({
    //     query: () => ({
    //         url: '/subscribe-data',
    //         }),
    //     // WebSocket connection and event handlers
    //     onMessage: (event) => {
    //         console.log('WebSocket message received:', event);
    //     // Dispatch an action or update your store with the received data
    //       },
    //     onError: (error) => {
    //         console.error('WebSocket error:', error);
    //       },
    //     // Optional: Close the WebSocket connection when the subscription is unsubscribed
    //     closeOnUnsubscribe: true,
    //  }),


    
  }),
});

export const { useGetCryptoListQuery,
               useGetFavoriteCoinsQuery,
               useGetCryptoHistoryQuery,
               useSearchCoinsQuery,
               useGetCryptoDetailsQuery,
               useGetMarketsQuery,
               useGetExchangesDetailsQuery,
               useGetHistoryCoinsOfWalletQuery,
               
            } = api;




// Authorization: 'Bearer 98c6563a-3f10-4d05-91e0-fd1279fe6f4b',