import { TResponseRedux, TUser } from '../../../types';
import { baseApi } from '../../api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: 'users/get-me',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TUser>) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetMeQuery } = userApi;
