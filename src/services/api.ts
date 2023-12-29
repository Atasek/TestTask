import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IFormInput} from "../pages/Form/Form";

// Define a service using a base URL and expected endpoints

const simulateRtkQuery = (data: IFormInput) => new Promise((resolve) => {
    setTimeout(() => {
        resolve({data});
    }, 1000);
});

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: '/'}),
    endpoints: (builder) => ({
  /*      updateForm: builder.mutation<void, IFormInput>({
            query: (data) => simulateRtkQuery(data),
        }),*/
        updateForm: builder.mutation<void, IFormInput>({
            // @ts-ignore
            queryFn: async (data: IFormInput) => {
                try {
                    return await simulateRtkQuery(data)
                    // Return the result in an object with a `data` field
                } catch (error) {
                    // Catch any errors and return them as an object with an `error` field
                    return error
                }
            },
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useUpdateFormMutation} = pokemonApi