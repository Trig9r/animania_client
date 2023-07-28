/* eslint-disable import/no-extraneous-dependencies */
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { MultiValue, SingleValue } from 'react-select';
import { CustomArrowProps } from 'react-slick';

type ReactTagProps<T> = import('react').ComponentProps<T>;

export interface InputProps {
  nickname: string;
  name: string;
  email: string;
  password: string;
}

export interface AuthPageInputProps {
  register: UseFormRegister<InputProps>;
  errors: FieldErrors<InputProps>;
}

export interface SignUpPropsFx {
  url: string;
  nickname: string;
  name: string;
  email: string;
  password: string;
}

export interface SignInPropsFx {
  url: string;
  username: string;
  password: string;
}

export type AnimePropsTypes = {
  id: number;
  name: string;
  description: string;
  genre: string;
  rating: number;
  studio: string;
  status: string;
  episodes: number;
  dateRelease: string;
  originalName: string;
  new: boolean;
  popularity: number;
  images: string;
  createdAt: string;
  updatedAt: string;
};

export interface AnimeTitlesProps {
  count: number;
  rows: AnimePropsTypes[];
}

export type MerchPropsTypes = {
  id: number;
  name: string;
  type: string;
  description: string;
  sizes: string;
  price: number;
  color: string;
  materials: string;
  anime: string;
  quantity: number;
  images: string;
  createdAt: string;
  updatedAt: string;
};

export interface MerchItemsProps {
  count: number;
  rows: MerchPropsTypes[];
}

export interface WrappedComponentProps {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
}

export interface SliderArrowProps extends CustomArrowProps {}

export interface IOption {
  value: string | number;
  label: string | number;
}

export type SelectOptionType = MultiValue<IOption> | SingleValue<IOption> | null;

export interface FiltersBlockProps {
  title: string;
}
