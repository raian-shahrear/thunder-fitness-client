import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiUrl } from "../../config";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: `${ApiUrl}/api/v1`}),
    tagTypes: ["product", "category"],
    endpoints: () => ({}),
})