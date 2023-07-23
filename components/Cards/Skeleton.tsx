/* eslint-disable import/no-extraneous-dependencies */
import { useId } from 'react';
import ContentLoader from 'react-content-loader';

export const CardSkeleton = () => {
  const skeletonId = useId();

  return (
    <ContentLoader
      key={skeletonId}
      speed={2}
      width={340}
      height={530}
      viewBox='0 0 340 530'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='340' height='530' />
    </ContentLoader>
  );
};
