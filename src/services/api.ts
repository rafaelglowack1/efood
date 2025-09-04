import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Restaurantes } from "../components/Body"

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getFeatureRestaurantes: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    })
  })
})

// exportando hook corretamente
export const { useGetFeatureRestaurantesQuery } = api
export default api
