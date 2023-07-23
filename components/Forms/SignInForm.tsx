/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { useStore } from 'effector-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

import { InputProps } from '@/@types';
import { SignInFx } from '@/utils/api/auth';
import { showAuthError } from '@/utils/hooks';

import { NicknameInput, PasswordInput } from '../UI/Input';

import styles from './form.module.css';
import spinnerStyles from '@/styles/loading.module.css';

export const SignInForm = () => {
  const router = useRouter();
  const isLoading = useStore(SignInFx.pending);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<InputProps>();

  const FormSubmit = async (data: InputProps) => {
    try {
      await SignInFx({
        url: '/users/login',
        username: data.nickname,
        password: data.password
      });

      reset();
      router.push('/');
    } catch (error) {
      showAuthError(error);
    }
  };

  return (
    <form className={styles.form} id='a-form' onSubmit={handleSubmit(FormSubmit)}>
      <h2 className={styles.title}>Авторизация</h2>
      <NicknameInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <button className={`${styles.form__button} ${styles.button}`}>
        {isLoading ? <span className={spinnerStyles.loading} /> : 'Войти'}
      </button>
    </form>
  );
};
