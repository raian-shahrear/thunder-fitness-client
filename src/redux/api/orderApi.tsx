import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/orders",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi;
