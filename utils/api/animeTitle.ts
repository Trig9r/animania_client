import toast from 'react-hot-toast';

import { api } from './axiosClient';

export const getNewAnimeTitle = async () => {
  const { data } = await api.get(`/anime-title/new`);

  if (data.warningMessage) {
    toast.error(data.warningMessage);
    return;
  }

  return data;
};
