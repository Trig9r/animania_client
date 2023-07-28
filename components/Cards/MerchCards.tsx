/* eslint-disable import/no-extraneous-dependencies */

'use client';

import useSWR from 'swr';

import { MerchItemsProps } from '@/@types';
import { getMerch } from '@/utils/api';

import { ItemSlider } from '../ItemSlider';

import { CardItem } from './CardItem';
import { CardSkeleton } from './Skeleton';

export const MerchCards = () => {
  const { data, isLoading, error } = useSWR<MerchItemsProps>(
    '/api/merch?limit=20&offset=0',
    getMerch
  );

  if (isLoading) return new Array(3).fill('').map(() => <CardSkeleton />);

  return (
    <ItemSlider>
      {data?.rows.map((merch) => (
        <CardItem
          title={merch.name}
          price={merch.price}
          img={JSON.parse(merch.images)[0]}
          href={`/merch/${merch.name}`}
        />
      ))}
    </ItemSlider>
  );
};
