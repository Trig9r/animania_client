/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import useSWR from 'swr';

import { AnimePropsTypes, AnimeTitlesProps } from '@/@types';
import { getAnimeTitlesFx } from '@/utils/api';

import { CardItem } from './CardItem';
import { CardSkeleton } from './Skeleton';

import styles from '@/app/catalog/page.module.css';

interface AnimeTitleCardsProps {
  initialItems: AnimePropsTypes[];
  fetchItems: (page?: number) => Promise<AnimePropsTypes[]>;
}

const loader = Array(3)
  .fill('')
  .map(() => <CardSkeleton />);

export const AnimeTitleCards = ({ initialItems, fetchItems }: AnimeTitleCardsProps) => {
  // const { data, isLoading, error } = useSWR<AnimeTitlesProps>('/anime-title', getAnimeTitlesFx);
  const fetching = React.useRef(false);
  const [pages, setPages] = React.useState([initialItems]);
  const items = pages.flatMap((page) => page);

  const loadMore = async (page: number) => {
    if (!fetching.current) {
      try {
        fetching.current = true;

        const data = await fetchItems(page);
        setPages((prev) => [...prev, data]);
      } finally {
        fetching.current = false;
      }
    }
  };

  return (
    <InfiniteScroll
      className={styles.catalog__list}
      hasMore
      pageStart={0}
      loadMore={loadMore}
      loader={
        <span key={0} className='loader'>
          Loading ...
        </span>
      }
      element='main'
    >
      {items.map((anime) => (
        <CardItem
          key={anime.id}
          title={anime.name}
          description={anime.description}
          rating={anime.rating}
          img={JSON.parse(anime.images)[0]}
          href={`/anime/${anime.name}`}
        />
      ))}
    </InfiniteScroll>
  );
};
