'use client';

import { useId } from 'react';

import { AuthPageInputProps } from '@/@types';

import styles from './input.module.css';

export const NicknameInput = ({ register, errors }: AuthPageInputProps) => {
  const labelId = useId();

  return (
    <label className={styles.form__label} htmlFor={labelId}>
      <input
        {...register('nickname', {
          required: 'Введите никнейм!',
          minLength: 2,
          maxLength: 15
        })}
        id={labelId}
        className={styles.form__input}
        type='text'
        placeholder='Никнейм'
      />
      {errors.nickname && <span className={styles.error_alert}>{errors.nickname?.message}</span>}
      {errors.nickname && errors.nickname.type === 'minLength' && (
        <span className={styles.error_alert}>Минимум 2 символа!</span>
      )}
      {errors.nickname && errors.nickname.type === 'maxLength' && (
        <span className={styles.error_alert}>Не более 15 символов!</span>
      )}
    </label>
  );
};
