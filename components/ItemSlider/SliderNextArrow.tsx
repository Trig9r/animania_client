import { SliderArrowProps } from '@/@types';

import { SliderArrowIcon } from '../Icons';

import styles from './styles.module.css';

export const SliderNextArrow: React.FC<SliderArrowProps> = ({ onClick }) => (
  <button className={`${styles.slider__arrow} ${styles.slider__arrow_next}`} onClick={onClick}>
    <span>
      <SliderArrowIcon />
    </span>
  </button>
);
