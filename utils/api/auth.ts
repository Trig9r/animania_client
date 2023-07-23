/* eslint-disable import/no-extraneous-dependencies */
import { createEffect } from 'effector-next';
import toast from 'react-hot-toast';

import { SignInPropsFx, SignUpPropsFx } from '@/@types';

import { api } from './axiosClient';

export const SignUpFx = createEffect(
  async ({ url, nickname, name, email, password }: SignUpPropsFx) => {
    const { data } = await api.post(url, { nickname, name, email, password });

    if (data.warningMessage) {
      toast.error(data.warningMessage);
      return;
    }

    toast.success('Регистрация прошла успешно!');

    return data;
  }
);

export const SignInFx = createEffect(async ({ url, username, password }: SignInPropsFx) => {
  const { data } = await api.post(url, { username, password });

  if (data.warningMessage) {
    toast.error(data.warningMessage);
    return;
  }

  toast.success('Вход выполнен!');

  return data;
});
