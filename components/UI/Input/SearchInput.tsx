/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import Select from 'react-select';

import { SelectOptionType } from '@/@types';
import { SearchIcon } from '@/components/Icons';

import { controlStyles, menuStyles, optionStyles, searchInputStyles } from './searchInputStyles';

import styles from './input.module.css';

export const SearchInput = () => {
  const inputId = React.useId();

  const [searchOption, setSearchOption] = React.useState<SelectOptionType>(null);

  const handleSearchOptionChange = (selectedOption: SelectOptionType) => {
    setSearchOption(selectedOption);
  };

  return (
    <label htmlFor={inputId}>
      <div className={styles.search__input__container}>
        <SearchIcon />
        <Select
          maxMenuHeight={100}
          inputId={inputId}
          placeholder='Поиск...'
          value={searchOption}
          onChange={handleSearchOptionChange}
          className={styles.search__input}
          styles={{
            ...searchInputStyles,
            control: (defaultStyles) => ({ ...controlStyles(defaultStyles) }),
            input: (defaultStyles) => ({ ...defaultStyles, color: '#cecfd0', width: 178 }),
            menu: (defaultStyles) => ({ ...menuStyles(defaultStyles) }),
            option: (defaultStyles, state) => ({ ...optionStyles(defaultStyles, state) })
          }}
          isClearable
          openMenuOnClick={false}
          options={[1, 2, 3, 4, 5].map(() => ({
            value: 'Бездомный бог',
            label: (
              <div className={styles.input__search__item}>
                <div className={styles.input__search__item__img}>
                  <img
                    className={styles.item__img}
                    src='https://clck.ru/34x8z3'
                    alt='https://clck.ru/34x8z3'
                  />
                </div>

                <div className={styles.input__search__item__info}>
                  <h2 className={styles.item__name}>Бездомный Бог</h2>
                  <span className={styles.item__original_name}>Noragami</span>
                  <span className={styles.item__info}>Серий: 12 / 2014 г. </span>
                </div>
              </div>
            )
          }))}
        />
      </div>
    </label>
  );
};
