import Link from 'next/link';
import React from 'react';

import { MessageIcon, NotificationIcon } from '@/components/Icons';
import ProfileDropdown from '@/components/ProfileDropdown/ProfileDropdown';
import { Button } from '@/components/UI/Button';
import { SearchInput } from '@/components/UI/Input';

import { Navigation } from './Navigation';

import styles from './styles.module.css';

const navItems = [
  { label: 'Каталог', href: '/catalog' },
  { label: 'Случайная', href: '/random' },
  { label: 'Топ 100', href: '/top-100' },
  { label: 'Wiki', href: '/wiki' }
];

export const Header = () => (
  <header className={`container ${styles.header__container}`}>
    <div className={styles.header__logo}>
      <Link href='/'>
        <span className={styles.header__logo_name_red}>Ani</span>
        <span className={styles.header__logo_name}>mania</span>
      </Link>
    </div>

    <ul className={styles.header__nav}>
      <Navigation navLinks={navItems} />
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
