import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (queries) => {
        return {
          url: "/products",
          method: "GET",
          params: queries
        };
      },
      providesTags: ["product"],
    }),
    getProductsByCategory: builder.query({
      query: (id) => {
        return {
          url: `/products/by-category/${id}`,
          method: "GET",
        };
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
    }),
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/products",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    removeProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/products/${data.id}`,
          method: "PATCH",
          body: data.data,
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} = productApi;
