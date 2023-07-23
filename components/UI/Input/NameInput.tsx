'use client';

import { useId } from 'react';

import { AuthPageInputProps } from '@/@types';

import styles from './input.module.css';

export const NameInput = ({ register, errors }: AuthPageInputProps) => {
  const labelId = useId();

  return (
    <label className={styles.form__label} htmlFor={labelId}>
      <input
        {...register('name', {
          required: 'Введите имя!',
          minLength: 2,
          maxLength: 15,
          pattern: {
            value: /^[а-яА-Яa-zA-ZёЁ]*$/,
            message: 'Недопустимое значение!'
          }
        })}
        id={labelId}
        className={styles.form__input}
        type='text'
        placeholder='Имя'
      />
      {errors.name && <span className={styles.error_alert}>{errors.name?.message}</span>}
      {errors.name && errors.name.type === 'minLength' && (
        <span className={styles.error_alert}>Минимум 2 символа!</span>
      )}
      {errors.name && errors.name.type === 'maxLength' && (
        <span className={styles.error_alert}>Не более 15 символов!</span>
      )}
    </label>
  );
};
