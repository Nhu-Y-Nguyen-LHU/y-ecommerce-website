import { apiSlice } from "../api/apiSlice";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://shofy-backend.vercel.app';

export const brandApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    getActiveBrands: builder.query({
      query: () => `${API_BASE_URL}/api/brand/active`
    }),
  }),
});

export const {
 useGetActiveBrandsQuery
} = brandApi;
