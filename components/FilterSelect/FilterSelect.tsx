'use client';

import React from 'react';
import Select from 'react-select';

import { SelectOptionType } from '@/@types';
import { categoriesOptions } from '@/constants';
import { createSelectOption } from '@/utils/helpers';

import { optionStyles } from '../UI/Input/searchInputStyles';

import { controlStyles, menuStyles, selectStyles } from './select';

export const FilterSelect = () => {
  const [categoryOption, setCategoryOption] = React.useState<SelectOptionType>(null);

  const handleCategoryOptionChange = (selectedOption: SelectOptionType) => {
    setCategoryOption(selectedOption);
  };

  return (
    <Select
      placeholder='Поиск...'
      value={categoryOption || createSelectOption('По популярности')}
      onChange={handleCategoryOptionChange}
      styles={{
        ...selectStyles,
        control: (defaultStyles) => ({ ...controlStyles(defaultStyles) }),
        input: (defaultStyles) => ({ ...defaultStyles, color: '#cecfd0', width: 178 }),
        menu: (defaultStyles) => ({ ...menuStyles(defaultStyles) }),
        option: (defaultStyles, state) => ({ ...optionStyles(defaultStyles, state) })
      }}
      isSearchable={false}
      options={categoriesOptions}
    />
  );
};
