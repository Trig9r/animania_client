/* eslint-disable import/no-extraneous-dependencies */

'use client';

import useSWR from 'swr';

import { AnimeTitlesProps } from '@/@types';
import { getNewAnimeTitleFx } from '@/utils/api';

import { ItemSlider } from '../ItemSlider';

import { CardItem } from './CardItem';
import { CardSkeleton } from './Skeleton';

export const NewAnimeCards = () => {
  const { data, isLoading, error } = useSWR<AnimeTitlesProps>(
    '/api/new-anime-title',
    getNewAnimeTitleFx
  );

  if (isLoading) return new Array(3).fill('').map(() => <CardSkeleton />);

  return (
    <ItemSlider>
      {data?.rows.map((anime) => (
        <CardItem
          key={anime.id}
          title={anime.name}
          description={anime.description}
          rating={anime.rating}
          img={JSON.parse(anime.images)[0]}
          href={`/anime/${anime.name}`}
        />
      ))}
    </ItemSlider>
  );
};
