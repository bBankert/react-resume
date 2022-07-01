import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const informationApi = createApi({
    reducerPath: 'informationApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
      getInformation: builder.query({
          //pull based on current url
        query: () => `${window.location.pathname}/data/data.json`,
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetInformationQuery } = informationApi