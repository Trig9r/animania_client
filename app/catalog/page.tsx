import axios from 'axios';
import { Metadata } from 'next';
import Image from 'next/image';

import { AnimeTitleCards, FiltersBlock, FilterSelect } from '@/components';
import { Footer, Header } from '@/components/Layout';
import catalogTitle from '@/public/images/catalog.png';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Animania | Каталог'
};

const fetchItems = async (page = 0) => {
  'use server';

  const response = await fetch(`http://localhost:3000/anime-title?limit=12&offset=${page}`);
  const data = await response.json();

  return data.rows;
};

const Catalog = async () => {
  const items = await fetchItems();

  console.log(items);

  return (
    <>
      <Header />
      <section className={styles.catalog}>
        <div className={`container ${styles.catalog__container}`}>
          <div className={styles.catalog__title__container}>
            <Image src={catalogTitle} alt='catalogTitle' />
            <h2 className={styles.catalog__title}>Каталог</h2>
          </div>

          <div className={styles.catalog__top}>
            {false && <FiltersBlock title='Жанры' />}
            {false && <FiltersBlock title='Студия' />}
            <div className={styles.catalog__top__inner}>
              <button className={styles.catalog__top__reset} disabled>
                Сбросить фильтр
              </button>
              <FilterSelect />
            </div>
          </div>

          <div className={styles.catalog__bottom}>
            <div className={styles.catalog__bottom__inner}>
              <div className=''>Фильтры</div>

              <ul className={styles.catalog__list}>
                <AnimeTitleCards initialItems={items} fetchItems={fetchItems} />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Catalog;
