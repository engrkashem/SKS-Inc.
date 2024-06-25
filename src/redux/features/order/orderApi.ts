import { baseApi } from '../../api/baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyShoppingCarts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: '/orders/my-cart',
          method: 'GET',
          params,
        };
      },
      providesTags: ['shoppingCarts'],
      transformResponse: (response: TResponseRedux<TAllProductsResponse>) => {
        const { data, pagination, links } = response;
        return { data, links, pagination };
      },
    }),

    addToCart: builder.mutation({
      query: (data) => ({
        url: `/orders`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['shoppingCarts'],
    }),

    updateOrderQty: builder.mutation({
      query: ({ orderId, data }) => ({
        url: `/orders/${orderId}/update-qty`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['shoppingCarts'],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetMyShoppingCartsQuery,
  useUpdateOrderQtyMutation,
} = orderApi;
