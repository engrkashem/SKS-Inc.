import {
  TAllProductsResponse,
  TProduct,
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
        const { links, pagination } = response;
        const products = response.data?.products;
        const categories = response.data?.categories;
        return { categories, products, pagination, links };
      },
    }),

    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),

      transformResponse: (response: TResponseRedux<TProduct>) => {
        const { data, links } = response;
        return { data, links };
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productApi;
