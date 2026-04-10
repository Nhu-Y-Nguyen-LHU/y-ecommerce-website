import { apiSlice } from "@/redux/api/apiSlice";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://shofy-backend.vercel.app';

export const authApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    // get offer coupon
    getOfferCoupons: builder.query({
      query: () => `${API_BASE_URL}/api/coupon`,
      providesTags:['Coupon'],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const { useGetOfferCouponsQuery } = authApi;
