'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { ReactTagProps } from '@/@types';

import styles from './styles.module.css';

export interface ButtonProps extends ReactTagProps<'button'> {
  children: React.ReactNode;
  loading?: boolean;
  href?: string;
  classnames?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  href,
  classnames,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      {...props}
      onClick={props.onClick || handleClick}
      className={`${styles.button} ${classnames}`}
      disabled={loading || props.disabled}
    >
      {children}
    </button>
  );
};
