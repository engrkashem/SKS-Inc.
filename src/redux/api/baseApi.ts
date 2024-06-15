import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { logout, setUser } from '../features/auth/authSlice';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:5000/api/v2`,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  // handling 404 not found
  if (result?.error?.status === 404) {
    toast.error(result?.error?.data?.message);
  }

  // handling 403 forbidden
  if (result?.error?.status === 403) {
    toast.error(result?.error?.data?.message);
  }

  // handling 401 unauthorized
  if (result?.error?.status === 401) {
    //sending refresh token to get new access token
    const res = await fetch('http://localhost:5000/api/v2/auth/refresh-token', {
      method: 'POST',
      credentials: 'include',
    });

    const data = await res.json();

    // console.log(data);

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      // console.log(data.data);
      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ['products'],
  endpoints: () => ({}),
});
