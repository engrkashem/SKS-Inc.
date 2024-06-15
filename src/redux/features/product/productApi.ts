import {
  TAllProductsResponse,
  TQueryParams,
  TResponseRedux,
} from '../../../types';
import { baseApi } from '../../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: '/products',
          method: 'GET',
          params,
        };
      },
      providesTags: ['products'],
      transformResponse: (response: TResponseRedux<TAllProductsResponse>) => {
        const { categories, products } = response.data;
        return { categories, products };
      },
    }),
    // updateStudentsMarks: builder.mutation({
    //   query: (data) => ({
    //     url: '/enrolled-courses/update-enrolled-course-marks',
    //     method: 'PATCH',
    //     body: data,
    //   }),
    // }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
