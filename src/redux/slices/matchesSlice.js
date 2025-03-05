import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from "../../api/api";

export const matchesApi = createApi({
    reducerPath: 'matches',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getMatches: builder.query({
            query: () =>   `/fronttemp`,
        }),
    }),
})

export const useGetMatches = matchesApi.endpoints.getMatches.useQuery;