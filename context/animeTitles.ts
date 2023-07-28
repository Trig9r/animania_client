import { createDomain } from 'effector-next';

import { AnimeTitlesProps } from '@/@types';

const animeTitles = createDomain();

export const setAnimeTitles = animeTitles.createEvent<AnimeTitlesProps>();

export const $animeTitles = animeTitles
  .createStore<AnimeTitlesProps>({} as AnimeTitlesProps)
  .on(setAnimeTitles, (_, anime) => anime);
