/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import { CSSObjectWithLabel, GroupBase, OptionProps, StylesConfig } from 'react-select';

import { IOption } from '@/@types';

export const controlStyles = (defaultStyles: CSSObjectWithLabel) => ({
  ...defaultStyles,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  // height: '40px',
  boxShadow: 'none',
  '&:hover': {
    borderColor: '#9E9E9E'
  },
  '& .css-1dimb5e-singleValue': {
    color: '#f2f2f2'
  },
  marginLeft: '5px'
});

export const menuStyles = (defaultStyles: CSSObjectWithLabel) => ({
  ...defaultStyles,
  boxShadow: 'none',
  borderRadius: '10px',
  border: 'none',
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    width: '4px',
    paddingTop: '5px'
  },
  '::-webkit-scrollbar-track': {
    border: 'none',
    padding: '2px 0',
    backgroundColor: 'transperent'
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    backgroundColor: '#d9d9d9',
    border: 'none'
  },
  backgroundColor: '#9E9E9E',
  minWidth: 232,
  minHeight: 30,
  maxHeight: 270,
  zIndex: 50,
  marginLeft: -40
});

export const optionStyles = (
  defaultStyles: CSSObjectWithLabel,
  state: OptionProps<IOption, boolean, GroupBase<IOption>>
) => {
  const backgroundHoverForDarkMode = state.isSelected
    ? state.isSelected
      ? '#f2f2f2'
      : '#c2b2be'
    : state.isSelected
    ? '#f2f2f2'
    : '#c2b2be';

  const colorHoverForDarkMode = state.isSelected
    ? state.isSelected
      ? '#222222'
      : '#f2f2f2'
    : state.isSelected
    ? '#222222'
    : '#f2f2f2';

  return {
    ...defaultStyles,
    padding: '12px 18px',
    cursor: 'pointer',
    margin: 0,
    '&:hover': {
      backgroundColor: backgroundHoverForDarkMode,
      color: colorHoverForDarkMode
    },
    backgroundColor: state.isSelected ? '#9e9e9e' : '#9e9e9e',

    color: state.isSelected ? '#222222' : '#f2f2f2'
  };
};

export const searchInputStyles: StylesConfig<IOption, boolean, GroupBase<IOption>> = {
  indicatorSeparator: () => ({
    border: 'none'
  }),
  dropdownIndicator: () => ({
    display: 'none'
  }),
  menuList: () => ({}),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    fontFamily: 'CorporateS-Regular',
    fontSize: '16px',
    lineHeight: '126%',
    letterSpacing: '1.68px',
    color: '#9f9f9f'
  })
};
