'use client';

import { useId } from 'react';

import { AuthPageInputProps } from '@/@types';

import styles from './input.module.css';

export const PasswordInput = ({ register, errors }: AuthPageInputProps) => {
  const labelId = useId();

  return (
    <label className={styles.form__label} htmlFor={labelId}>
      <input
        {...register('password', {
          required: 'Введите пароль!',
          minLength: 4,
          maxLength: 20
        })}
        id={labelId}
        className={styles.form__input}
        type='password'
        placeholder='Пароль'
      />
      {errors.password && <span className={styles.error_alert}>{errors.password?.message}</span>}
      {errors.password && errors.password.type === 'minLength' && (
        <span className={styles.error_alert}>Минимум 4 символа!</span>
      )}
      {errors.password && errors.password.type === 'maxLength' && (
        <span className={styles.error_alert}>Не более 20 символов!</span>
      )}
    </label>
  );
};
