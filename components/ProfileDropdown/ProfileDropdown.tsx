/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { forwardRef } from 'react';

import { WrappedComponentProps } from '@/@types';
import { withClickOutside } from '@/utils/hooks';

import { ArrowIcon, LogoutIcon, UserIcon } from '../Icons';
import { Button } from '../UI';

import styles from './styles.module.css';

const ProfileDropdown = forwardRef<HTMLDivElement, WrappedComponentProps>(
  ({ isOpen, setIsOpen }, ref) => {
    const router = useRouter();

    const toggleProfileDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className={styles.profile} ref={ref}>
        <Button classnames={styles.profile__btn} onClick={toggleProfileDropdown}>
          <UserIcon />
          <span className={styles.user_nickname}>Triggero</span>
          <ArrowIcon />
        </Button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className={styles.profile__dropdown}
              style={{ transformOrigin: 'center top' }}
            >
              <li className={styles.profile__dropdown__user}>
                <span className={styles.profile__dropdown__personal_page}>Личный кабинет</span>
                <span className={styles.profile__dropdown__email}>smirnovkiryusha12@gmail.com</span>
              </li>
              <li className={styles.profile__dropdown__item}>
                <button
                  className={styles.profile__dropdown__item__btn}
                  onClick={() => router.push('/auth')}
                >
                  <span className={styles.profile__dropdown__item__text}>Выйти</span>
                  <span className={styles.profile__dropdown__item__svg}>
                    <LogoutIcon />
                  </span>
                </button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

ProfileDropdown.displayName = 'ProfileDropdown';

export default withClickOutside(ProfileDropdown);
