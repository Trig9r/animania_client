import Link from 'next/link';
import React from 'react';

import { MessageIcon, NotificationIcon } from '@/components/Icons';
import ProfileDropdown from '@/components/ProfileDropdown/ProfileDropdown';
import { Button } from '@/components/UI/Button';
import { SearchInput } from '@/components/UI/Input';

import styles from './styles.module.css';

export const Header = () => {
  console.log();

  return (
    <header className={`container ${styles.header__container}`}>
      <div className={styles.header__logo}>
        <Link href='/'>
          <span className={styles.header__logo_name_red}>Ani</span>
          <span className={styles.header__logo_name}>mania</span>
        </Link>
      </div>

      <ul className={styles.header__nav}>
        <Link href='/top-100'>
          <li className={styles.header__nav__item}>Топ 100</li>
        </Link>
        <Link href='random'>
          <li className={styles.header__nav__item}>Случайная</li>
        </Link>
        <Link href='/catalog'>
          <li className={styles.header__nav__item}>Каталог</li>
        </Link>
        <Link href='/wiki'>
          <li className={styles.header__nav__item}>Wiki</li>
        </Link>
      </ul>

      <div className={styles.header__search}>
        <SearchInput />
      </div>

      <div className={styles.header__notifications}>
        <Button classnames={styles.header__btn_notification}>
          <NotificationIcon />
        </Button>
        <Button classnames={styles.header__btn_message}>
          <MessageIcon />
        </Button>
      </div>

      <div className={styles.header__user}>
        <ProfileDropdown />
      </div>
    </header>
  );
};
