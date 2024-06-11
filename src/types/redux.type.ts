import { BaseQueryApi } from '@reduxjs/toolkit/query';
import { TResponse } from './global.type';

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
