/* eslint-disable import/no-extraneous-dependencies */

'use client';

import useSWR from 'swr';

import { AnimePropsTypes } from '@/@types';
import { getNewAnimeTitle } from '@/utils/api';

import { CardItem } from './CardItem';
import { CardSkeleton } from './Skeleton';

export const NewAnimeCards = () => {
  const { data, isLoading, error } = useSWR('/api/new-anime-title', getNewAnimeTitle);

  if (isLoading) return new Array(3).fill('').map(() => <CardSkeleton />);

  return data.rows.map((anime: AnimePropsTypes) => (
    <CardItem
      key={anime.id}
      title={anime.name}
      description={anime.description}
      rating={anime.rating}
      img={JSON.parse(anime.images)[0]}
      href={`/anime/${anime.name}`}
    />
  ));
};
