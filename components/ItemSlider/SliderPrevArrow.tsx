import { SliderArrowProps } from '@/@types';

import { SliderArrowIcon } from '../Icons';

import styles from './styles.module.css';

export const SliderPrevArrow: React.FC<SliderArrowProps> = ({ onClick }) => (
  <button className={`${styles.slider__arrow} ${styles.slider__arrow_prev}`} onClick={onClick}>
    <span>
      <SliderArrowIcon />
    </span>
  </button>
);
