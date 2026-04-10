import { apiSlice } from "../api/apiSlice";
import { localizeProductPayload } from "@/utils/product-title-localization";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://shofy-backend.vercel.app';

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `${API_BASE_URL}/api/product/all`,
      transformResponse: (response) => localizeProductPayload(response),
      providesTags:['Products']
    }),
    getProductType: builder.query({
      query: ({ type, query }) => `${API_BASE_URL}/api/product/${type}?${query}`,
      transformResponse: (response) => localizeProductPayload(response),
      providesTags:['ProductType']
    }),
    getOfferProducts: builder.query({
      query: (type) => `${API_BASE_URL}/api/product/offer?type=${type}`,
      transformResponse: (response) => localizeProductPayload(response),
      providesTags:['OfferProducts']
    }),
    getPopularProductByType: builder.query({
      query: (type) => `${API_BASE_URL}/api/product/popular/${type}`,
      transformResponse: (response) => localizeProductPayload(response),
      providesTags:['PopularProducts']
    }),
    getTopRatedProducts: builder.query({
      query: () => `${API_BASE_URL}/api/product/top-rated`,
      transformResponse: (response) => localizeProductPayload(response),
      providesTags:['TopRatedProducts']
    }),
    // get single product
    getProduct: builder.query({
      query: (id) => `${API_BASE_URL}/api/product/single-product/${id}`,
      transformResponse: (response) => localizeProductPayload(response),
      providesTags: (result, error, arg) => [{ type: "Product", id: arg }],
      invalidatesTags: (result, error, arg) => [
        { type: "RelatedProducts", id:arg },
      ],
    }),
    // get related products
    getRelatedProducts: builder.query({
      query: (id) => `${API_BASE_URL}/api/product/related-product/${id}`,
      transformResponse: (response) => localizeProductPayload(response),
      providesTags: (result, error, arg) => [
        { type: "RelatedProducts", id: arg },
      ],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductTypeQuery,
  useGetOfferProductsQuery,
  useGetPopularProductByTypeQuery,
  useGetTopRatedProductsQuery,
  useGetProductQuery,
  useGetRelatedProductsQuery,
} = productApi;
