import toast from 'react-hot-toast';

import { api } from './axiosClient';

export const getMerch = async () => {
  const { data } = await api.get('merch?limit=3&offset=0');

  if (data.warningMessage) {
    toast.error(data.warningMessage);
    return;
  }

  return data;
};
