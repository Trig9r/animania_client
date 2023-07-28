'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { FiltersBlockProps } from '@/@types';

import styles from './styles.module.css';

export const FiltersBlock = ({ title }: FiltersBlockProps) => (
  <AnimatePresence>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h3 className={styles.filters__title}>{title}:</h3>

      <ul className={styles.filters__list}>
        {[].map((item) => (
          <li key={item} className={styles.filters__list__item} />
        ))}
      </ul>
    </motion.div>
  </AnimatePresence>
);
