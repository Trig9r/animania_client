/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { useStore } from 'effector-react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { InputProps } from '@/@types';
import { SignUpFx } from '@/utils/api/auth';
import { showAuthError } from '@/utils/hooks';

import { EmailInput, NameInput, NicknameInput, PasswordInput } from '../UI/Input';

import styles from './form.module.css';
import spinnerStyles from '@/styles/loading.module.css';

export const SignUpForm = ({ switchForm }: { switchForm: () => void }) => {
  const isLoading = useStore(SignUpFx.pending);

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField
  } = useForm<InputProps>();

  const FormSubmit = async (data: InputProps) => {
    try {
      const userData = await SignUpFx({
        url: '/users/signUp',
        nickname: data.nickname,
        name: data.name,
        email: data.email,
        password: data.password
      });

      if (!userData) {
        return;
      }

      resetField('nickname');
      resetField('name');
      resetField('email');
      resetField('password');
      switchForm();
    } catch (error) {
      showAuthError(error);
    }
  };

  return (
    <form className={styles.form} id='a-form' onSubmit={handleSubmit(FormSubmit)}>
      <h2 className={styles.title}>Создать аккаунт</h2>
      <NicknameInput register={register} errors={errors} />
      <NameInput register={register} errors={errors} />
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <button className={`${styles.form__button} ${styles.button}`}>
        {isLoading ? <span className={spinnerStyles.loading} /> : 'Создать'}
      </button>
    </form>
  );
};
