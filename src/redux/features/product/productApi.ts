import { TAllProductsResponse, TResponseRedux } from '../../../types';
import { baseApi } from '../../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductCategories: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['categories'],
      transformResponse: (response: TResponseRedux<TAllProductsResponse>) => {
        const { categories } = response.data;
        return categories;
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

export const { useGetProductCategoriesQuery } = productApi;

/**
  
  getProductCategories: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: '/enrolled-courses',
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['facultyCourses'],
      transformResponse: (response: TResponseREdux<TEnrolledCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

   */
