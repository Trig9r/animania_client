import toast from 'react-hot-toast';

import { setAnimeTitles } from '@/context';

import { api } from './axiosClient';

export const getNewAnimeTitleFx = async () => {
  const { data } = await api.get(`/anime-title/new`);

  if (data.warningMessage) {
    toast.error(data.warningMessage);
    return;
  }

  return data;
};

export const getAnimeTitlesFx = async () => {
  try {
    const { data } = await api.get(`/anime-title`);

    setAnimeTitles(data);
    return data;
  } catch (error) {
    toast.error((error as Error).message);
  }
};
