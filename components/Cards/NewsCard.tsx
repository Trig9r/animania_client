'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import styles from './styles.module.css';

interface NewsCardProps {
  img?: string;
  title?: string;
  description?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ title, description, img }) => {
  const router = useRouter();

  return (
    <div className={styles.news__card__container} onClick={() => router.push(`/news/sss`)}>
      <div className={styles.news__card__img__container}>
        <img className={styles.news__card__img} src='https://clck.ru/34x8z3' alt='zxc' />
      </div>

      <div className={styles.news__card__info}>
        <h2 className={styles.news__card__title}>Бездомный Бог</h2>
        <p className={styles.news__card__desc}>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
          interdum, ac aliquet odio mattis.
        </p>
      </div>
    </div>
  );
};
