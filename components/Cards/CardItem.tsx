import { useRouter } from 'next/navigation';

import { formatPrice } from '@/utils/helpers';

import { LoveIcon, StarIcon } from '../Icons';

import styles from './styles.module.css';

interface CardItemProps {
  img: string;
  title: string;
  description?: string;
  rating?: number;
  price?: number;
  href: string;
}

export const CardItem: React.FC<CardItemProps> = ({
  img,
  description,
  title,
  rating,
  price,
  href
}) => {
  const router = useRouter();

  return (
    <div className={styles.card_item__container} onClick={() => router.push(href)}>
      <img src={`${img}`} alt={title} className={styles.card__image} />
      <div className={styles.img_tint} />

      <button className={styles.add_fav_btn}>
        <LoveIcon />
      </button>

      {rating && (
        <div className={styles.card_item__rating}>
          <StarIcon />
          <span>{rating}</span>
        </div>
      )}

      <div className={styles.card_item__info}>
        <h2 className={styles.card_item__name} title={title}>
          {title}
        </h2>
        {description && <p className={styles.card_item__desc}>{description}</p>}
        {price && <p className={styles.card_item__price}>Цена: {formatPrice(price)} P</p>}
      </div>
    </div>
  );
};
