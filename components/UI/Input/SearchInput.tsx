'use client';

import React from 'react';

import { SearchIcon } from '@/components/Icons';

import styles from './input.module.css';

export const SearchInput = () => {
  const inputId = React.useId();

  return (
    <label htmlFor={inputId}>
      <div className={styles.search__input__container}>
        <SearchIcon />
        <input id={inputId} type='text' className={styles.search__input} placeholder='Поиск...' />
      </div>
    </label>
  );
};
