import { createSelectOption } from '@/utils/helpers';

export enum HTTPStatus {
  UNAUTHORIZED = 401,
  FORBIDEN = 403
}

export const categoriesOptions = [
  'По популярности',
  'По рейтингу',
  'По дате выхода',
  'По названию'
].map(createSelectOption);
