'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './styles.module.css';

interface NavLinkProps {
  label: string;
  href: string;
}

type NavLinksProps = {
  navLinks: NavLinkProps[];
};

export const Navigation = ({ navLinks }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link href={item.href} key={item.label}>
            <li className={`${styles.header__nav__item} ${isActive ? styles.active : ''}`}>
              {item.label}
            </li>
          </Link>
        );
      })}
    </>
  );
};
