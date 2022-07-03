import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IInformation } from '~/shared/models/information'


// Define a service using a base URL and expected endpoints
export const informationApi = createApi({
    reducerPath: 'informationApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
      getInformation: builder.query<IInformation,null>({
          //pull based on current url
          //check to see if the path name ends with a forward slash or not and correctly request the data file
        query: () => `${window.location.pathname}${window.location.pathname.endsWith('/') ? '' : '/'}data/data.json`,
      }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetInformationQuery } = informationApi
