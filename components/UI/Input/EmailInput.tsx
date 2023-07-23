'use client';

import { useId } from 'react';

import { AuthPageInputProps } from '@/@types';

import styles from './input.module.css';

export const EmailInput = ({ register, errors }: AuthPageInputProps) => {
  const labelId = useId();

  return (
    <label className={styles.form__label} htmlFor={labelId}>
      <input
        {...register('email', {
          required: 'Введите почту!',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Недопустимый email!'
          }
        })}
        id={labelId}
        className={styles.form__input}
        type='email'
        placeholder='Email'
      />
      {errors.email && <span className={styles.error_alert}>{errors.email?.message}</span>}
    </label>
  );
};
